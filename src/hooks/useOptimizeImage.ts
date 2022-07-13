import {usePostOptimizeImage} from '~api/useFetchOptimizeImage';
import useDownloadImage from '~hooks/useDownloadImage';
import {FileInfo, FileStatus} from '~types/TinyFile';

const {readFileSync} = window.require('fs');

const ProgressStep = {
    Init: 1,
    Read: 2,
    Sent: 75,
    Download: 100,
};

export default function useOptimizeImage() {
    const postImage = usePostOptimizeImage();
    const downloadImage = useDownloadImage();

    return async (
        file: FileInfo,
        onProgress: (file: FileInfo, filePatch: Partial<FileInfo>) => void,
    ) => {
        const progress = (percent: number, prev: number, goal: number) =>
            prev + (goal - prev) + percent;
        try {
            onProgress(file, {status: FileStatus.InProgress, progress: 1});
            const data = readFileSync(file.path);
            onProgress(file, {progress: 5});
            const info = await postImage(data, (p) =>
                onProgress(file, {
                    progress: progress(p, ProgressStep.Read, ProgressStep.Sent),
                }),
            );
            onProgress(file, {
                progress: ProgressStep.Sent,
                size: info.input.size,
                optimizedSize: info.output.size,
            });

            await downloadImage(file, info);
            onProgress(file, {progress: 100, status: FileStatus.Optimized});
        } catch (e) {
            onProgress(file, {
                error: e.message,
                status: FileStatus.Error,
                progress: 0,
            });
        }
    };
}

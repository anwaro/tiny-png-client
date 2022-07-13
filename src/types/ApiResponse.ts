export type ApiResponse = {
    input: {
        size: number;
        type: string;
    };
    output: {
        size: number;
        type: string;
        width: number;
        height: number;
        ratio: number;
        url: string;
    };
};

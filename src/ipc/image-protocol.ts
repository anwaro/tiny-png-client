import {normalize} from 'path';

import {protocol} from 'electron';

import {IcpProtocol} from './types';

export default function setupImageProtocol() {
    protocol.registerFileProtocol(IcpProtocol.Atom, (request, callback) =>
        callback(decodeURI(normalize(request.url.substr(7)))),
    );
}

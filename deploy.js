(async function () {
    const fs = require('fs');
    const path = require('path');
    const util = require('util');

    const mkdocs = path.resolve('.', 'venv', 'Scripts', 'mkdocs.exe');
    const config = path.resolve('.', 'mkdocs.yml');
    const cwd = path.resolve('..', 'halak.github.io');
    try {
        await fs.promises.access(mkdocs, fs.constants.F_OK | fs.constants.R_OK);
        await fs.promises.access(config, fs.constants.F_OK | fs.constants.R_OK);
        await fs.promises.access(cwd, fs.constants.F_OK | fs.constants.R_OK);
    } catch (exception) {
        console.error(exception);
        return;
    }

    const args = [
        'gh-deploy',
        '--config-file', config,
        '--remote-branch', 'master',
    ];

    const execFile = util.promisify(require('child_process').execFile);
    const { stdout, stderr, error } = await execFile(mkdocs, args, { cwd: cwd, shell: false });
    if (stdout.length > 0) {
        console.log(stdout);
    }
    if (stderr.length > 0) {
        console.error(stderr);
    }
    if (error) {
        throw error;
    }

    console.log('Deploy complete.');
})();

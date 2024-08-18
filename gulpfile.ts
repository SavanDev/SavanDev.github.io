import { dest, series, src, watch } from 'gulp';
import { task } from 'gulp';
import { spawn } from 'child_process';
import { init } from 'browser-sync';
import { publish } from 'gh-pages';
import ts from 'gulp-typescript';

const siteRoot = '_site';
const siteSourceDir = 'website';

function compileJS()
{
    return src(`${siteSourceDir}/_ts/*.ts`)
        .pipe(ts({
            noImplicitAny: true,
            allowJs: true,
            resolveJsonModule: true,
            outFile: 'index.js'
        }))
        .pipe(dest(`${siteSourceDir}/assets/js`));
}

function serveSite()
{
    init({
        files: [`${siteRoot}/**`],
        port: 4000,
        server: {
            baseDir: siteRoot
        }
    });

    watch([`${siteSourceDir}/**`, `!${siteSourceDir}/assets/js/index.js`, '_config.yml'], series(compileJS, runJekyll));
}

function runJekyll()
{
    return spawn('jekyll', ['build']);
}

function getGemsBundle()
{
    return spawn('bundle', ['install']);
}

function publishOnGitHub()
{
    return publish(siteRoot, {dotfiles: true, message: "Chesspawn update!"}, (err) => console.log(`[Deploy]: ${err}`));
}

getGemsBundle().stderr.on('data', (data) => console.log(`[GemBundle] error: ${data}`));
runJekyll().stderr.on('data', (data) => console.log(`[Jekyll] error: ${data}`));

// Tasks
task('default', series(getGemsBundle, compileJS, runJekyll, serveSite));
task('github', series(getGemsBundle, compileJS, runJekyll, publishOnGitHub));
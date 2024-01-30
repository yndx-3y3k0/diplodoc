import {getTestPaths, runYfmDocs, compareDirectories} from '../utils';

const geretateMapTestTemplate = (testTitle: string, testRootPath: string, {md2md = true, md2html = true}) => {
    test(testTitle, () => {
        const {inputPath, outputPath} = getTestPaths(testRootPath);
        runYfmDocs(inputPath, outputPath, {md2md, md2html});
        compareDirectories(outputPath);
    });
}

describe('Allow load custom resources', () => {
    geretateMapTestTemplate('md2md with metadata', 'mocks/metadata/md2md-with-metadata', {md2html: false})

    geretateMapTestTemplate('md2html with metadata', 'mocks/metadata/md2html-with-metadata', {md2md: false})
});

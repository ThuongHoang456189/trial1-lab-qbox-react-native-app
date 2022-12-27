export function getFittingImageSizes (maxHeight, maxWidth, originalHeight, originalWidth, scaleRatioAfterFitting) {

    const ratio = Math.max(originalHeight/maxHeight, originalWidth/maxWidth);

    const newHeight = Math.floor(originalHeight/ratio*scaleRatioAfterFitting);
    const newWidth = Math.floor(originalWidth/ratio*scaleRatioAfterFitting);

    return {resizedHeight: newHeight, resizedWidth: newWidth};
}
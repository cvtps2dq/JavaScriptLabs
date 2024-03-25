function visualizeProgress(percent) {
    const completedBlocks = percent / 10;
    const remainingBlocks = 10 - completedBlocks;

    const progressBar = percent === 100
        ? ("100% Complete!\n[%%%%%%%%%%]")
        : (percent % 10 === 0
            ? (percent + "% [" + "%".repeat(completedBlocks) + ".".repeat(remainingBlocks) + "]\nStill loading...")
            : "Invalid input.");

    console.log(progressBar);
}

visualizeProgress(30);
visualizeProgress(50);
visualizeProgress(100);
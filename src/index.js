// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) return [];
    const result = [];
    matrix.forEach((el, index) =>
        index % 2 === 0 ? result.push(...el) : result.push(...el.reverse())
    );

    return result;
};

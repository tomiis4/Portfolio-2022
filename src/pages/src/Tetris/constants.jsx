    const TetrominoShape = {
        NoShape: 0,

        HtmlShape: 1,
        JsShape: 2,
        ScssShape: 3,
        ReactShape: 4,
        NodeShape: 5,
    };
    Object.freeze(TetrominoShape);
    
    const squareDim = 50;
    const numRowInBoard = 14;
    const numColInBoard = 8;
    const BoardWidth = numColInBoard * squareDim;
    const BoardHeight = numRowInBoard * squareDim;
    
    const TetrominoCoordsTable = [
        [[0, 0],     [0, 0],     [0, 0],     [0, 0]],

        [[0, 0], [0, 1], [0, 2], [0, 3]],
        [[0, 0], [1, 0], [0, 1], [1, 1]],
        [[1, 0], [0, 1], [1, 1], [2, 1]],
        [[0, 0], [0, 1], [0, 2], [0, 3]],
        [[1, 0], [1, 1], [1, 2], [0, 2]]
    ];
    
    const TetrominoColor = [
        '#000000', '#D48943', '#C0D443', '#D443B5',
        '#43A0D4', "#69D443",
    ];
    
    const TetrominoText = [
        [[""], [""], [""], [""]],

        [["H"], ["T"], ["M"], ["L"]],
        [["JA"], ["VA"], ["SCR"], ["IPT"]],
        [["S"], ["C"], ["S"], ["S"]],
        [["RE"], ["AC"], ["T"], ["JS"]],
        [["NO"], ["DE"], ["J"], ["S"]]
    ];

    export {
        TetrominoText, TetrominoShape, squareDim, numRowInBoard, numColInBoard, BoardWidth, BoardHeight,
        TetrominoCoordsTable, TetrominoColor
    };
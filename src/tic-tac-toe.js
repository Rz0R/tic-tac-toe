class TicTacToe {
    constructor() {
        this.turn = true;
        this.players = ['x', 'o'];
        this.field =
            [
                [null, null, null],
                [null, null, null],
                [null, null, null]
            ];
        
    }

    getCurrentPlayerSymbol() {
        if (this.turn) {
            return this.players[0];
        } else {
            return this.players[1];;
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.turn = !this.turn;
        }
    }

    isFinished() {
        return this.isDraw() || Boolean(this.getWinner());
    }

    getWinner() {
        function checkRows(symbol, field) {
            for (const row of field) {
                if (row.every(item => item === symbol)) {
                    return true;
                }
            }
            return false;
        }

        function checkColumns(symbol, field) {
            for (let i = 0; i < field[0].length; i++) {
                const column = [];
                for (let j = 0; j < field.length; j++) {
                    column.push(field[j][i]);
                }
                if (column.every(item => item === symbol)) {
                    return true;
                }
            }
            return false;
        }

        function checkMainDiag(symbol, field) {
            const diag = [];
            for (let i = 0; i < field.length; i++) {
                diag.push(field[i][i]);
            }
            if (diag.every(item => item === symbol)) {
                return true;
            }
            return false;
        }

        function checkSideDiag(symbol, field) {
            const diag = [];
            const n = field.length - 1;
            for (let i = 0; i <= n; i++) {
                diag.push(field[i][n - i]);
            }
            if (diag.every(item => item === symbol)) {
                return true;
            }
            return false;
        }

        for (const player of this.players) {
            if (checkRows(player, this.field)) {
                return player;
            }
            if (checkColumns(player, this.field)) {
                return player;
            }
            if (checkMainDiag(player, this.field)) {
                return player;
            }
            if (checkSideDiag(player, this.field)) {
                return player;
            }
        }

        return null;
    }

    noMoreTurns() {
        for (const row of this.field) {
            if (row.some(item => !item)) {
                return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex]) {
            return this.field[rowIndex][colIndex];
        }
        return null;
    }
}


module.exports = TicTacToe;

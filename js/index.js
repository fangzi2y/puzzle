$(function () {
    var piece = [];
    var empty_piece = {
        y: 2,
        x: 2
    }

    var start = function () {
        var html = '';
        for (i = 0; i < 8; i++) {
            html += '<img src="123.jpg" alt="" class="image image_' + i + '" data-id="' + i + '">';
            piece[i] = {
                y: parseInt(i / 3),
                x: (i % 3)
            }
        }
        html += '<div class="image data clear" data-id="8"></div>';
        $('#container').append(html);

        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (i == 2 && j == 2) {
                    return;
                }
                var y1 = 80 * j;
                var y2 = 80 + y1;
                var x2 = 80 * i;
                var x1 = 80 + x2;
                $('.image_' + (i + j * 3)).css('clip', 'rect(' + y1 + 'px ' + x1 + 'px ' + y2 + 'px ' + x2 + 'px)');
            }
        }
    }

    var swap = function (piece, empty_piece) {
        var temp_array = [];
        var temp;
        temp = empty_piece;
        empty_piece = piece;
        piece = temp;
        temp_array[0] = piece;
        temp_array[1] = empty_piece;
        return temp_array;
    }

    var exchange = function (num) {

        if (piece[num].y == empty_piece.y) {
            if (piece[num].x < empty_piece.x) {
                if (piece[num].x < 2) {
                    $('.image_' + num).css('left', parseInt($('.image_' + num).css('left')) + 80 + 'px');
                    piece[num]= swap(piece[num], empty_piece)[0];
                    empty_piece= swap(piece[num], empty_piece)[1];
                }
                else {
                    return;
                }
            }
            else if (piece[num].x > empty_piece.x) {
                if (piece[num].x > 0) {
                    $('.image_' + num).css('right', parseInt($('.image_' + num).css('right')) + 80 + 'px');
                    piece[num]= swap(piece[num], empty_piece)[0];
                    empty_piece= swap(piece[num], empty_piece)[1];
                }
                else {
                    return;
                }
             }

        }
        else if (piece[num].y == empty_piece.y) {


        }
    }

    var judge = function (num) {
        if (piece[num].x == empty_piece.x || piece[num].y == empty_piece.y) {
            exchange(num);
        }
    }

    var over = function () {
        var flag = true;
        for (var i = 0; i < 8; i++) {
            var cur = $('.image_' + i).attr('data-id');
            var next = $('.image_' + (i + 1)).attr('data-id');
            if (next < cur) {
                flag = false;
                return;
            }
        }
        if (flag == true) {
            alert('successful');
        }
    }

    start();

    $('.image').on('click', function () {
        judge($(this).attr('data-id'));
    })

})
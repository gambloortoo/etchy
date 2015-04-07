$(document).ready( buildGrid(16, 16) );
$('.grid-gen').on('click', function() {
    buildGrid(16, 16);
});

function buildGrid(m, n) {
    var i, j;
    var html = '';
    for (i = 0; i < m; ++i) {
        html += '<div class="grid-row">';
        for (j = 0; j < n; ++j) {
            if (j > 0) {
                html += '-->';
            }
            html += '<div class="grid-cell"></div>';
            if (j != (n - 1)) {
                html += '<!--';
            }
        }
        html +=  '</div>';
    }
    $('.grid').html(html);

    $('.grid-cell').on('mouseenter', function () {
        $(this).css('background', '#000');
        // $(this).addClass('etched');
    });
    $('.grid-cell').on('mouseleave', function () {
        // $(this).animate('{ background: #fff; }, 500');
        // $(this).css('background', '#fff');
        $(this).fadeTo(400, 0, function () {
            $(this).fadeTo(100, 1);
        });
    });


}
document.body.style.border = "2px solid green";


var save = $('<div />').attr('class', 'jfk-button jfk-button-action')
    .css('height', '27px')
    .css('min-width', '54px')
    .css('float', 'left')
    .css('margin-left', '10px')
    .html('Save');

save.on('click', function(e) {


    // Get text from html
    function getText(elt) {
        return $("<div/>").html(elt).text();
    }

    var translation = {
        'original': null,
        'translation': null,
        'otherTranslations': [],
        'definitions': []
    };

    var translationText = $('#result_box').html();

    if (translationText !== '') {

        translation.original = getText($('#source').val());
        translation.translation = getText(translationText);

        // Get definitions nature => definition
        // var natures = $('.gt-cd.gt-cd-md .gt-cd-pos'), definitions = $('.gt-def-info');
        var natures = $('.gt-cd.gt-cd-md .gt-cd-pos');
        var definitionLists= $('.gt-cd.gt-cd-md .gt-def-list');


        if (natures.length === definitionLists.length) {

            for (var pos = 0; pos < natures.length; pos++) {

                var nature = {
                    nature: '',
                    definitions: []
                };

                var definitionList = definitionLists[pos];
                var definitionElts = $(definitionList).find('.gt-def-info');

                $.each(definitionElts, function (index, definitionElt) {

                    var definition = {
                        'row': getText($(definitionElt).find('.gt-def-row').html()),
                        'example': getText($(definitionElt).find('.gt-def-example')),
                        'synonym': getText($(definitionElt).find('.gt-def-synonym'))
                    };

                    nature.definitions.push(definition);

                });

            }
            translation.natures.push(nature)

        }

        console.log(translation);
    }

});

$('#gt-lang-right').append(save);


// var info = $('<div />')
//     .attr('class', 'jfk-button jfk-button-action')
//     .css('height', '75px')
//     .css('width', '250px')
//     .css('float', 'left')
//     .html('nope');
// $('#gt-lang-right').append(info);



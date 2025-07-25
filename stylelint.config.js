import stylelintConfigStandardScss from 'stylelint-config-standard-scss';

export default {
    extends: [stylelintConfigStandardScss],
    rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'selector-class-pattern': null,
    },
}
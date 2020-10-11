export default function registerHandlebarsHelpers(Handlebars) {
    Handlebars.registerHelper('switch', switchHelper);
    Handlebars.registerHelper('case', caseHelper);
}

function switchHelper(value, options) {
    this.switch_value = value;
    return options.fn(this);
}

function caseHelper(value, options) {
    // eslint-disable-next-line react/no-this-in-sfc
    if (value === this.switch_value) {
        return options.fn(this);
    }
    return null;
}

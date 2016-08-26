var _ = require('lodash');


module.exports = pageify;

var sectionTypeMap = {
    "Developer Guide": "guide",
    "Marketer Guide": "successArticle"
};

/**
 *  Pageifies a single Contentful entry
 */
function pageify(entry, i18n){
    let file;
    function resolveI18n(flds){
        if(i18n === false){
            return flds;
        }
        return _.transform(flds, function(result, value, key) {
            result[key] = value['en-US'];
        }, {});
    }
    
    let fields = resolveI18n(entry.fields);

    if ("article" == entry.sys.contentType.sys.id) {
        var contentfulSection = fields.sectionType;
        var metalsmithSection = sectionTypeMap[contentfulSection];
        if(!metalsmithSection){
            throw new Error(`Missing or undefined section type. ${JSON.stringify(contentfulSection)} mapped to ${metalsmithSection}`);
        }
        file = {
            title: fields.title,
            highlights: fields.highlights,
            contents: fields.content,
            slug: fields.slug,
            
            fields: fields,
            id: entry.sys.id,
            sectionType: metalsmithSection,
            template: "hasTableOfContents.html"
        };
    }else if("faqCategory" == entry.sys.contentType.sys.id){
        file = {
            title: fields.name + " FAQ",
            slug: fields.slug,
            contents: "", // Required because some plugins depend on it being non-null
            
            fields: fields,
            id: entry.sys.id,
            
            template: "faqCategory.html",
            sectionType: "faq"
        };
    }else{
        file = null;
    }
    
    return file;
}
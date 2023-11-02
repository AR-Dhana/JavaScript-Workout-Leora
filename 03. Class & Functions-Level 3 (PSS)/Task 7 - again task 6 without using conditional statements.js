const timelineMyEducation = {
    "educationalInstitutionsSpecification": {
        "1": ["Govt Elementary School", "Jaya Nagaram"],
        "2": ["Govt High School", "Sendhangudi"], "3": ["Govt Girls Hr Sec School", "Keeramangam"],
        "4": ["Chendhuran College of Engineering & Technology", "Pudukkottai"]
    }, "educationType":
        { "01": "primaryEducation", "02": "intermediateEducation", "03": "higherScondaryEducation", "04": "higherEducation" },
    "educationalSpecification": [{
        "educationType": "01", "standard": 1, "academicYear": 2006, "status": "pass", "mark": 224,
        "yearlyMarkPercentage": 45, "yearlyAttandancePercentage": 98, "educationalInstitutionsSpecification": "1"
    },
    {
        "educationType": "01", "standard": 2, "academicYear": 2007, "status": "pass", "mark": 289, "yearlyMarkPercentage": 58,
        "yearlyAttandancePercentage": 89, "educationalInstitutionsSpecification": "1"
    }, {
        "educationType": "01", "standard": 3,
        "academicYear": 2008, "status": "pass", "mark": 374, "yearlyMarkPercentage": 75, "yearlyAttandancePercentage": 74,
        "educationalInstitutionsSpecification": "1"
    }, {
        "educationType": "01", "standard": 4, "academicYear": 2009,
        "status": "pass", "mark": 429, "yearlyMarkPercentage": 86, "yearlyAttandancePercentage": 89,
        "educationalInstitutionsSpecification": "1"
    }, {
        "educationType": "01", "standard": 5, "academicYear": 2010,
        "status": "pass", "mark": 389, "yearlyMarkPercentage": 78, "yearlyAttandancePercentage": 99,
        "educationalInstitutionsSpecification": "1"
    }, {
        "educationType": "02", "standard": 6, "academicYear": 2011,
        "status": "pass", "mark": 449, "yearlyMarkPercentage": 90, "yearlyAttandancePercentage": 79,
        "educationalInstitutionsSpecification": "2"
    }, {
        "educationType": "02", "standard": 7, "academicYear": 2012,
        "status": "pass", "mark": 439, "yearlyMarkPercentage": 88, "yearlyAttandancePercentage": 88,
        "educationalInstitutionsSpecification": "2"
    }, {
        "educationType": "02", "standard": 8, "academicYear": 2013,
        "status": "pass", "mark": 411, "yearlyMarkPercentage": 82, "yearlyAttandancePercentage": 71,
        "educationalInstitutionsSpecification": "2"
    }, {
        "educationType": "02", "standard": 9, "academicYear": 2014,
        "status": "pass", "mark": 451, "yearlyMarkPercentage": 90, "yearlyAttandancePercentage": 82,
        "educationalInstitutionsSpecification": "2"
    }, {
        "educationType": "02", "standard": 10, "academicYear": 2015,
        "status": "pass", "mark": 473, "yearlyMarkPercentage": 95,
        "yearlyAttandancePercentage": 89, "educationalInstitutionsSpecification": "2"
    },]
}
let avg_mark_percentage_primary = 0;
let avg_attandance_percentage_primary = 0;
let avg_mark_percentage_intermidiate = 0;
let avg_attandance_percentage_intermidiate = 0;
let dataRecreation = [];
dataRecreation.primarySchooling = {};
dataRecreation.intermidiateSchooling = {};
for (i = 0; i < 5; i++) {
    avg_mark_percentage_primary = avg_mark_percentage_primary + timelineMyEducation.educationalSpecification[i].mark;
    avg_attandance_percentage_primary = avg_attandance_percentage_primary + timelineMyEducation.educationalSpecification[i].yearlyAttandancePercentage;
}
for (i = 5; i < 10; i++) {
    avg_mark_percentage_intermidiate = avg_mark_percentage_intermidiate + timelineMyEducation.educationalSpecification[i].mark;
    avg_attandance_percentage_intermidiate = avg_attandance_percentage_intermidiate + timelineMyEducation.educationalSpecification[i].yearlyAttandancePercentage;
}
avg_mark_percentage_primary = avg_mark_percentage_primary / 5;
avg_mark_percentage_intermidiate = avg_mark_percentage_intermidiate / 5;
avg_attandance_percentage_primary = avg_attandance_percentage_primary / 5;
avg_attandance_percentage_intermidiate = avg_attandance_percentage_intermidiate / 5;
dataRecreation.primarySchooling.avg_mark_percentage_primary = avg_mark_percentage_primary;
dataRecreation.primarySchooling.avg_attandance_percentage_primary = avg_attandance_percentage_primary;
dataRecreation.intermidiateSchooling.avg_mark_percentage_intermidiate = avg_mark_percentage_intermidiate;
dataRecreation.intermidiateSchooling.avg_attandance_percentage_intermidiate = avg_attandance_percentage_intermidiate;
console.log(dataRecreation);
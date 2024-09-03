const Course = require('../models/Course');

class SiteController {
    //[GET]/
    index(req, res) {
        console.log(Course);
        Course.find({})
            .then((courses) => res.json(courses))
            .catch((error) =>
                res.status(400).json({ error: 'Course not found' }),
            );

        // res.render('home');
    }
    //[GET]/search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

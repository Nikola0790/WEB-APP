function Program (date) {
    this.date = date;
    this.listOfMovies = [];
}

Program.prototype.addMovie = function (movie) {
    this.listOfMovies.push(movie);
}

Program.prototype.moviesDuration = function () {
    var sumLength = 0;
    this.listOfMovies.forEach (function (element) {
        sumLength += element.duration;
    })
    return sumLength;
}

Program.prototype.getData = function () {
    return this.date + ', ' + this.listOfMovies.length + ' movies, ' + 'duration: ' + this.moviesDuration() + ' min';
}

export default Program;
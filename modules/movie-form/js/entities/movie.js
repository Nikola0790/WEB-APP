function Movie (title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
}

Movie.prototype.getFirstAndLastLetter = function () {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return firstLetter + lastLetter;
}

Movie.prototype.getData = function () {
    return this.title + ', ' + this.duration + ' min, ' + this.getFirstAndLastLetter();
}

export default Movie;
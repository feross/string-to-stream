module.exports = StringStream

var inherits = require('inherits')
var stream = require('readable-stream')

inherits(StringStream, stream.Readable)

function StringStream (str, encoding) {
  if (!(this instanceof StringStream)) return new StringStream(str, encoding)
  stream.Readable.call(this)
  this._str = str
  this._encoding = encoding || 'utf8'
}

StringStream.prototype._read = function () {
  if (!this.ended) {
    var self = this
    process.nextTick(function () {
      self.push(new Buffer(self._str, self._encoding))
      self.push(null)
    })
    this.ended = true
  }
}

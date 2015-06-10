# node-acronym-maker
An api for http://acronym-maker.com/ in nodejs

# Usage

`var acronym = require('acronym-maker')`

`acronym.create(Acronym, Callback)`
Acronym: An acronym such as `aos` or `ddd`

Callback:
`Err` - error
`Res` - result `["array", "of", "strings"]`

## Example:
```
var acronym = require('acronym-maker')

acronym.create("aos", function(err, res){
console.log(res) // ["a...", "o...", "s..."]
})
```

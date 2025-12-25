function debounce(callback, delay, immediate = false) {

	let timer
	return function(...args){
		let context = this
		if(timer){
			clearTimeout(timer)
		}

		timer = setTimeout(()=>{
			callback.apply(args,context)
		},delay)
	}
  }
  
  module.exports = debounce;

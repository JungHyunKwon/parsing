/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name parsing
		 * @since 2017-12-06
		 * @param {string} value
		 * @param {string} from
		 * @param {string} to
		 * @param {number} index
		 * @return {string}
		 */
		window.parsing(value, from, to, index) {
			var result = '';

			//문자일 때
			if(typeof value === 'string') {
				var fromIndex = value.indexOf(from, index);
				
				//문자가 있을 때
				if(fromIndex > -1) {
					var startIndex = fromIndex + from.length,
						toIndex = value.indexOf(to, startIndex);
					
					//문자가 있을 때
					if(toIndex > -1) {
						result = value.substring(startIndex, toIndex);
					}
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}
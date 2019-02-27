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
		 * @return {object}
		 */
		window.parsing = function(value, from, to, index) {
			var result = {};

			//문자일 때
			if(typeof value === 'string') {
				var fromIndex = value.indexOf(from, index);
				
				//문자가 있을 때
				if(fromIndex > -1) {
					var startIndex = fromIndex + from.length,
						toIndex = value.indexOf(to, startIndex);
					
					//문자가 있을 때
					if(toIndex > -1) {
						result.value = value.substring(startIndex, toIndex);
						result.fromIndex = startIndex;
						result.toIndex = toIndex;
					}
				}
			}

			return result;
		};

		/**
		 * @name parsingAll
		 * @since 2017-12-06
		 * @param {string} value
		 * @param {string} from
		 * @param {string} to
		 * @return {array}
		 */
		window.parsingAll = function(value, from, to) {
			var result = [];
			
			//문자일 때
			if(typeof value === 'string' && typeof from === 'string' && typeof to === 'string') {
				var fromIndex = 0,
					toIndex = 0,
					startIndex = 0;
				
				while((fromIndex = value.indexOf(from, fromIndex)) > -1) {
					startIndex = fromIndex + from.length;
					toIndex = value.indexOf(to, startIndex);
					
					//값이 있을 때
					if(toIndex > -1) {
						result.push({
							value : value.substring(startIndex, toIndex),
							fromIndex : startIndex,
							toIndex : toIndex
						});

						fromIndex = toIndex + 1;
					}
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}
/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	/**
	 * @name 파싱
	 * @since 2017-12-06
	 * @param {string} value
	 * @param {string} from
	 * @param {string} to
	 * @param {number} index
	 * @return {object}
	 */
	function _parsing(value, from, to, index) {
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
	}
	
	/**
	 * @description 파싱을 사용자에게 제공합니다.
	 */
	window.parsing = _parsing;

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
				parsingResult = {};

			while((fromIndex = (parsingResult = _parsing(value, from, to, fromIndex)).fromIndex) > -1) {
				var toIndex = parsingResult.toIndex;

				//값이 있을 때
				if(toIndex > -1) {
					result.push(parsingResult);

					fromIndex = toIndex + 1;
				}
			}
		}

		return result;
	};
})();
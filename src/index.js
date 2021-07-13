import { feval } from './modules/feval.js'
import { interval } from './modules/interval.js'
import { sleep } from './modules/sleep.js'
import { include } from './modules/include.js'

mobjutil = {
	feval: fastEval,
	interval: interval,
	sleep: sleep,
	include: include,
}

window.mobjutil = mobjutil

export default mobjutil
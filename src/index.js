import * as animLib from './animations.js';
import { TextSlider } from './textSlider.js'

const headers = [
	"<i>30 stanowisk</i> VR'owych",
	"<i>W pełni</i> wyposażony bar",
	"<i>Strefa gier</i> konsolowych"
]

const descriptions = [
	"Lorem Ipsum jest tekstem stosowanym w <strong>przemyśle poligraficznym</strong>. Został po raz pierwszy użyty w XV w. przez <strong>nieznanego drukarza</strong>.",
	"Zaczął być <strong>używany przemyśle elektronicznym</strong>, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty <strong>Lorem Ipsum</strong>.",
	"<strong>Lorem Ipsum</strong> nie jest tylko przypadkowym tekstem. Ma ono korzenie w klasycznej łacińskiej literaturze z 45 roku przed <strong>Chrystusem</strong>, czyli ponad 2000 lat temu!"
]

/*
const popUpWindow = `
	<div id="more-games" class="pop-up">
		<ul class="games">
			<li>Games</li>
		</ul>
	</div>
`
*/

document.addEventListener("DOMContentLoaded", () => {
	const headerHamburger = animLib.getHeaderHamburgerDOMElem();

	headerHamburger.addEventListener("click", () => {
		animLib.toggleMenu();
	});

	const moreGamesBtn = animLib.getMoreGamesBtnDOMElem();

	moreGamesBtn.addEventListener("click", () => {
		animLib.showGames();
	});

	const textSlider = new TextSlider(headers, descriptions);
	textSlider.init();
})

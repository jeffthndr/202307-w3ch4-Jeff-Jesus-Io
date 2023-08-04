import { series } from "../../data/series";
import { Component } from "../component";
export class StatusMovie extends Component {
    seriesList;
    constructor(selector) {
        super(selector);
        this.template = this.createTemplate();
        this.seriesList = series;
        this.render();
    }
    watchOrNot() { }
}
{
    return series.filter((movie) => {
        if (movie.watched === true) {
            class {
            };
            "serie" >
                class {
                };
            "serie__poster";
            src = $;
            {
                movie.poster;
            }
            alt = $;
            {
                movie.name;
            }
            />
                < h4;
            class {
            }
            "serie__title" > $;
            {
                movie.name;
            }
            /h4>
                < p;
            class {
            }
            "serie__info" > $;
            {
                movie.creator;
            }
            /p>
                < ul;
            class {
            }
            "score" >
                class {
                };
            "score__star" >
                class {
                };
            "icon--score fas fa-star";
            title = "1/5" > /i>
                < /li>
                < li;
            class {
            }
            "score__star" >
                class {
                };
            "icon--score fas fa-star";
            title = "2/5" > /i>
                < /li>
                < li;
            class {
            }
            "score__star" >
                class {
                };
            "icon--score fas fa-star";
            title = "3/5" > /i>
                < /li>
                < li;
            class {
            }
            "score__star" >
                class {
                };
            "icon--score fas fa-star";
            title = "4/5" > /i>
                < /li>
                < li;
            class {
            }
            "score__star" >
                class {
                };
            "icon--score fas fa-star";
            title = "5/5" > /i>
                < /li>
                < /ul>
                < i;
            class {
            }
            "fas fa-times-circle icon--delete" > /i>
                < /li>´;
        }
    }, createtemplate(), {
        return: 
    } < ul, class {
    } = "series-list" >
        $, { this: .watchOrNot() }
        < /ul>´);
}

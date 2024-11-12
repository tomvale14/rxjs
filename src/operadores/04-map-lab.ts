import { fromEvent, map, tap } from "rxjs";



const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula lobortis est. Mauris cursus ligula ut nisl cursus eleifend. Sed sed erat odio. Duis feugiat turpis vel nulla tempus, sed aliquet nulla euismod. Mauris vel pharetra mi. Nullam efficitur molestie nibh eu faucibus. In eget quam sit amet urna aliquam commodo ut sed turpis. In volutpat id ex in fringilla. Etiam ultricies augue ac semper pellentesque. Donec ac accumsan metus. Cras ultricies eget leo a lobortis. Aenean sagittis laoreet urna eget commodo. Vestibulum vel efficitur odio.
<br/><br/>
Phasellus pharetra scelerisque condimentum. Duis fermentum ipsum eget nisl vestibulum, et dictum est tristique. In vitae augue ornare, suscipit ipsum quis, varius nunc. Duis eget fermentum quam, vel maximus est. Sed ut commodo purus, non porta lorem. Cras venenatis imperdiet mauris a consectetur. Donec molestie eros eu diam tristique laoreet. Nulla pretium sollicitudin justo quis pellentesque. Suspendisse eget nisl pretium, congue erat sit amet, maximus sem. Curabitur egestas pellentesque leo sit amet eleifend. Pellentesque vehicula at orci eu tristique.
<br/><br/>
Phasellus ante purus, dapibus in finibus non, varius nec sem. Etiam pretium odio at imperdiet porta. Curabitur pulvinar mi eget metus tempus, vitae molestie purus consequat. Sed interdum eros mi, ac tempor nibh feugiat eget. Aenean ut tristique ipsum. Duis in fringilla diam, vitae ullamcorper augue. Etiam lobortis neque vel lacus viverra pretium. Phasellus in accumsan orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse eu magna ut est finibus eleifend. Aenean sagittis elit id justo ornare viverra. Phasellus eleifend orci eu interdum porta. Donec vel metus laoreet libero condimentum fermentum id eu nunc. Mauris elit leo, commodo non nulla non, aliquet sagittis ipsum. Nam ornare tristique viverra.
<br/><br/>
Cras semper ipsum sed nunc congue, et ultrices erat facilisis. Vestibulum rutrum, augue sit amet vulputate gravida, tellus sapien aliquam leo, sed placerat dolor quam ut dolor. Fusce sollicitudin consequat nisi vel porttitor. Nam rhoncus sodales ornare. Donec a aliquam dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut id erat lectus. Cras tempus, magna vel posuere suscipit, lacus lorem fermentum libero, a posuere dolor arcu non justo. Sed non vulputate felis. Maecenas lectus mauris, laoreet quis justo non, venenatis molestie diam.
<br/><br/>
Proin ut mollis eros, id consequat mi. Ut tincidunt tempus vulputate. Proin dignissim posuere felis. Ut vitae ante eleifend nisl molestie euismod ut fringilla leo. Nunc egestas a metus sit amet pharetra. Quisque maximus neque nunc, at maximus sem posuere eget. Sed consectetur odio nisl, id ultrices tortor consectetur quis. Maecenas quis tincidunt magna. Nam auctor nibh ut ex fringilla volutpat. In et accumsan nisl. Praesent vestibulum ipsum purus, commodo lacinia ante ullamcorper et. Sed tempus neque eget diam fermentum finibus.   
`;

const body = document.querySelector('body');
body.append( texto );

// progressbar
const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar');
body.append(progressbar);

// función que haga el cálculo
const calcularPorcentajeScroll = event => {

    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;
    // console.log({ scrollTop, scrollHeight, clientHeight });
    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}


// Streams
const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map( event => calcularPorcentajeScroll(event) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressbar.style.width = `${ porcentaje }%`;
});

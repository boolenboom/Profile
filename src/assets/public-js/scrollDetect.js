import { ref } from "vue";

export default function scrollDetect(startPoint = 0, endPoint){
    this.status = ref('initial');
    this.progress = ref(0);
    let self = this;
    let sP = startPoint, eP = endPoint;
    this.setRange = function(startPoint, endPoint){
        sP = startPoint || sP;
        eP = endPoint;
    }
    function handler(){
        return ()=>{
            window.requestAnimationFrame(()=>{
                if(eP == undefined){
                    self.status.value = window.scrollY > sP ? 'pass' : 'initial';
                }
                else if(eP != undefined){
                    let current = (window.scrollY - sP) / (eP - sP);
                    current = Math.min(1, Math.max(0, current));
                    self.progress.value = current;
                    self.status.value = current > 0 ? (current >= 1 ? 'pass' : 'enter') : 'initial'
                }
            })
        }
    }
    window.addEventListener( 'scroll', handler() );
}
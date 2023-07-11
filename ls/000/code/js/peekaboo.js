function showHide(idx) {
    var bld_cntn = document.getElementById(`${idx}`);
    if (document.getElementById(`${idx}_cntn`).className.includes('stt_show')) {
        document.getElementById(`${idx}_tag`).style.fontStyle = "normal";
        bld_cntn.style.display = "none";
        bld_cntn.classList.add('stt_hide');
        bld_cntn.classList.remove('stt_show');
    } else if (document.getElementById(`${idx}_cntn`).className.includes('stt_hide')) {
        document.getElementById(`${idx}_tag`).style.fontStyle = "italic";
        bld_cntn.style.display = "inline-block";
        bld_cntn.classList.add('stt_show');
        bld_cntn.classList.remove('stt_hide');
    }
}

function shovelDigging(scion_id) {
    //console.log(scion_id);
    var shvl = document.getElementById(`id_b_p_${scion_id}`);    
    //console.log(shvl);
    switch(shvl.className) {
        case 'styl_shvl_s0':
            document.getElementById(`id_b_bmp_top_${scion_id}`).style.display = "block";
            document.getElementById(`id_b_bmp_btm_${scion_id}`).style.display = "block";
            document.getElementById(`id_b_trstlbrd_${scion_id}`).style.display = "block";
            document.getElementById(`id_b_p_${scion_id}`).classList.remove('styl_shvl_s0');
            document.getElementById(`id_b_p_${scion_id}`).classList.add('styl_shvl_s1');
            document.getElementById(`id_b_cntnr_${scion_id}`).classList.add('styl_brnch_hide');
            document.getElementById(`id_b_cntnr_${scion_id}`).classList.remove('styl_stm_show');
            break;

        case 'styl_shvl_s1':
            document.getElementById(`id_b_p_${scion_id}`).setAttribute('class', 'styl_shvl_s2');
            const getAllChildren = (htmlElement) => {
                if (htmlElement.children.length === 0) return [htmlElement];
              
                let allChildElements = [];
              
                for (let i = 0; i < htmlElement.children.length; i++) {
                  let children = getAllChildren(htmlElement.children[i]);
                  if (children) allChildElements.push(...children);
                }
                allChildElements.push(htmlElement);
               //console.log(allChildElements);
              };


            var testyy = document.getElementById(`id_b_trstlbrd_${scion_id}`);
            getAllChildren(testyy);
            // //console.log(testyy);
            // //testyy.querySelectorAll(`:scope > *`).setAttribute('class', 'stt_show');
            // for (n in testyy.childNodes) {
            //     testyy.childNodes[n].classList.add('stt_show');
            // }
            // //testyy.childNodes.classList.add('stt_show');
            break;

        case 'styl_shvl_s2':
            document.getElementById(`id_b_bmp_top_${scion_id}`).style.display = "none";
            document.getElementById(`id_b_bmp_btm_${scion_id}`).style.display = "none";
            document.getElementById(`id_b_trstlbrd_${scion_id}`).style.display = "none";
            document.getElementById(`id_b_p_${scion_id}`).setAttribute('class', 'styl_shvl_s0');
            break;
    }
    

}

function showHideStem(scion_id) {
    var stm_clss = document.getElementById(`id_stm_cntnr_${scion_id}`).className;
    if (stm_clss.includes('stt_show')) {
        document.getElementById(`id_stm_bmp_top_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_bmp_btm_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_trstlbrd_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.add('stt_hide');
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.remove('stt_show');
    } else if (stm_clss.includes('stt_hide')) {
        document.getElementById(`id_stm_bmp_top_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_bmp_btm_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_trstlbrd_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.add('stt_show');
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.remove('stt_hide');
    }
}

function showHideTwig(scion_id) {
    var twig_clss = document.getElementById(`id_twig_cntnr_${scion_id}`).className;
    if (twig_clss.includes('stt_show')) {
        document.getElementById(`id_twig_bmp_top_${scion_id}`).style.display = "none";
        document.getElementById(`id_twig_bmp_btm_${scion_id}`).style.display = "none";
        document.getElementById(`id_twig_trstlbrd_${scion_id}`).style.display = "none";
        document.getElementById(`id_twig_cntnr_${scion_id}`).classList.add('stt_hide');
        document.getElementById(`id_twig_cntnr_${scion_id}`).classList.remove('stt_show');
    } else if (twig_clss.includes('stt_hide')) {
        document.getElementById(`id_twig_bmp_top_${scion_id}`).style.display = "block";
        document.getElementById(`id_twig_bmp_btm_${scion_id}`).style.display = "block";
        document.getElementById(`id_twig_trstlbrd_${scion_id}`).style.display = "block";
        document.getElementById(`id_twig_cntnr_${scion_id}`).classList.add('stt_show');
        document.getElementById(`id_twig_cntnr_${scion_id}`).classList.remove('stt_hide');
    }
}

function showHideStemShrt(scion_id) {
    var stm_clss = document.getElementById(`id_stm_shrt_cntnr_${scion_id}`).className;
    if (stm_clss.includes('stt_show')) {
        document.getElementById(`id_stm_shrt_bmp_top_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_shrt_bmp_btm_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_shrt_trstlbrd_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_shrt_cntnr_${scion_id}`).classList.add('stt_hide');
        document.getElementById(`id_stm_shrt_cntnr_${scion_id}`).classList.remove('stt_show');
    } else if (stm_clss.includes('stt_hide')) {
        document.getElementById(`id_stm_shrt_bmp_top_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_shrt_bmp_btm_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_shrt_trstlbrd_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_shrt_cntnr_${scion_id}`).classList.add('stt_show');
        document.getElementById(`id_stm_shrt_cntnr_${scion_id}`).classList.remove('stt_hide');
    }
}

function showHideTwg(scion_id) {
    var twg_clss = document.getElementById(`id_twg_cntnr_${scion_id}`).className;
    if (twg_clss.includes('stt_show')) {
        document.getElementById(`id_twg_bmp_top_${scion_id}`).style.display = "none";
        document.getElementById(`id_twg_bmp_btm_${scion_id}`).style.display = "none";
        document.getElementById(`id_twg_cntn_${scion_id}`).style.display = "none";
        document.getElementById(`id_twg_cntnr_${scion_id}`).classList.add('stt_hide');
        document.getElementById(`id_twg_cntnr_${scion_id}`).classList.remove('stt_show');
    } else if (twg_clss.includes('stt_hide')) {
        document.getElementById(`id_twg_bmp_top_${scion_id}`).style.display = "block";
        document.getElementById(`id_twg_bmp_btm_${scion_id}`).style.display = "block";
        document.getElementById(`id_twg_cntn_${scion_id}`).style.display = "block";
        document.getElementById(`id_twg_cntnr_${scion_id}`).classList.add('stt_show');
        document.getElementById(`id_twg_cntnr_${scion_id}`).classList.remove('stt_hide');
    }
}

function showHideStmLstExp(scion_id) {
    var twg_clss = document.getElementById(`id_stm_cntnr_${scion_id}`).className;
    if (twg_clss.includes('stt_show')) {
        document.getElementById(`id_stm_bmp_top_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_bmp_btm_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_trstlbrd_${scion_id}`).style.display = "none";
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.add('stt_hide');
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.remove('stt_show');
    } else if (twg_clss.includes('stt_hide')) {
        document.getElementById(`id_stm_bmp_top_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_bmp_btm_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_trstlbrd_${scion_id}`).style.display = "block";
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.add('stt_show');
        document.getElementById(`id_stm_cntnr_${scion_id}`).classList.remove('stt_hide');
    }
}

function pb_scns(insc_id) {
    console.log(insc_id);
    var scns_clss = document.getElementById(insc_id).className;
    console.log(scns_clss);
    if (scns_clss.includes('stt_show')) {
        document.getElementById(insc_id).style.display = "none";
        document.getElementById(insc_id).classList.add('stt_hide');
        document.getElementById(insc_id).classList.remove('stt_show');
    } else if (scns_clss.includes('stt_hide')) {
        document.getElementById(insc_id).style.display = "block";
        document.getElementById(insc_id).classList.add('stt_show');
        document.getElementById(insc_id).classList.remove('stt_hide');
    }
}

function mnu_showHide_top(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_cntnr_${scion_id}`);
    cnt.classList.toggle("active");
    var panel = document.getElementById(`mnu_accrd_cntn_${scion_id}`);
    if (panel.style.display === "block") {
        panel.style.display = "none";
        //cnt.style.margin = "0px";
    } else {
        panel.style.display = "block";
        //cnt.style.margin = "7px";
    }
}
function mnu_showHide_fldr(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_fldr_${scion_id}`);
    cnt.classList.toggle("styl_mnu_accrd_fldr_active");
    var panel = document.getElementById(`mnu_accrd_fldr_cntn_${scion_id}`);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

function mnu_showHide_top_blur(scion_id) {
    var blur_list = document.querySelectorAll(`[class=styl_mnu_accrd_fldr]`);
    console.log(blur_list);
    var bllst = [...document.querySelectorAll(`[class=styl_mnu_accrd_fldr]`)];
    console.log(bllst);
    //var blur_id = blur_list.find(`mnu_accrd_cntnr_${scion_id}`);
    //console.log(blur_id);
    //blur_list.forEach(console.log(listObj));

    Array.from(blur_list).forEach(function(el) {console.log(el);});
    
    var cnt = document.getElementById(`mnu_accrd_cntnr_${scion_id}`);
    cnt.classList.toggle("active");
    var panel = document.getElementById(`mnu_accrd_cntn_${scion_id}`);
    if (panel.style.display === "block") {
        panel.style.display = "none";
        //cnt.style.margin = "0px";
    } else {
        panel.style.display = "block";
        //cnt.style.margin = "7px";
    }
}

let pnt_plus = "<div class='styl_pointers'>+> </div>" + " ";
let pnt_minus = "<div class='styl_pointers' id='pntmns' onclick='rotatePointer()'>-> </div>" + " ";
let pnt_branch = "<div class='styl_pointers'>]}=> </div>" + " ";
let pnt_lixp = "<div class='styl_pointers'>+=>&nbsp</div>";
let bmp_brnch_top = "<div class='bumpers'>---<br>--- ---<br>--- --- ---</div>"
let bmp_stem_top = "<div class='bumpers'>--- ---<br>--- --- ---</div>";
let bmp_stem_bttm = "<div class='bump_butt'>---- ---- ----<br>---- ----</div>";
let bmp_stem_liste = "<div class='bumpers'>--- --- --- --- --- --- ---</div>";
let bmp_stem_cycl = "<div class='styl_stem_cycl bumpers'><br>------- ------- -------<br>------- -------<br>-------</div>";
let bmp_stem_exli = "<div class='bumper'>---<br>--- ---<br></div>";
let bmp_stem_exli_bttm = "<div class='styl_stem_tail'><br>---- ----<br>----<br></div>";
let bmp_brnch_tail = "<div class='styl_stem_tail'>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----</div>";
let bmp_sld_01 = "\\_";
let bmp_def = "&nbsp=&nbsp";
let bmp_stm_02 = "-- --<br>-- -- --<br>";

function shovelDigging(scion_id) {
    var shvl = document.getElementById("id_b_p_" + scion_id);    
    switch(shvl.className) {
        case 'styl_shvl_s0':
            document.getElementById('id_b_bmp_top_' + scion_id).style.display = "block";
            document.getElementById('id_b_bmp_btm_' + scion_id).style.display = "block";
            document.getElementById('id_b_trstlbrd_' + scion_id).style.display = "block";
            document.getElementById('id_b_p_' + scion_id).classList.remove('styl_shvl_s0');
            document.getElementById('id_b_p_' + scion_id).classList.add('styl_shvl_s1');
            document.getElementById('id_b_cntnr_' + scion_id).classList.add('styl_brnch_hide');
            document.getElementById('id_b_cntnr_' + scion_id).classList.remove('styl_stm_show');
            break;

        case 'styl_shvl_s1':
            document.getElementById('id_b_p_' + scion_id).setAttribute('class', 'styl_shvl_s2');
            console.log(document.querySelectorAll(`:scope > .id_b_trstlbrd_${scion_id}`));
            break;

        case 'styl_shvl_s2':
            document.getElementById('id_b_bmp_top_' + scion_id).style.display = "none";
            document.getElementById('id_b_bmp_btm_' + scion_id).style.display = "none";
            document.getElementById('id_b_trstlbrd_' + scion_id).style.display = "none";
            document.getElementById('id_b_p_' + scion_id).setAttribute('class', 'styl_shvl_s0');
            break;
    }
    

}

function showHideStem(scion_id) {
    var stm_clss = document.getElementById("id_stm_cntnr_" + scion_id).className;
    if (stm_clss.includes('stt_show')) {
        document.getElementById('id_stm_bmp_top_' + scion_id).style.display = "none";
        document.getElementById('id_stm_bmp_btm_' + scion_id).style.display = "none";
        document.getElementById('id_stm_trstlbrd_' + scion_id).style.display = "none";
        document.getElementById('id_stm_cntnr_' + scion_id).classList.add('stt_hide');
        document.getElementById('id_stm_cntnr_' + scion_id).classList.remove('stt_show');
    } else if (stm_clss.includes('stt_hide')) {
        document.getElementById('id_stm_bmp_top_' + scion_id).style.display = "block";
        document.getElementById('id_stm_bmp_btm_' + scion_id).style.display = "block";
        document.getElementById('id_stm_trstlbrd_' + scion_id).style.display = "block";
        document.getElementById('id_stm_cntnr_' + scion_id).classList.add('stt_show');
        document.getElementById('id_stm_cntnr_' + scion_id).classList.remove('stt_hide');
    }
    

}

function showHideTwig(scion_id) {
    var twg_clss = document.getElementById("id_twg_cntnr_" + scion_id).className;
    if (twg_clss.includes('stt_show')) {
        document.getElementById('id_twg_bmp_top_' + scion_id).style.display = "none";
        document.getElementById('id_twg_bmp_btm_' + scion_id).style.display = "none";
        document.getElementById('id_twg_cntn_' + scion_id).style.display = "none";
        document.getElementById('id_twg_cntnr_' + scion_id).classList.add('stt_hide');
        document.getElementById('id_twg_cntnr_' + scion_id).classList.remove('stt_show');
    } else if (twg_clss.includes('stt_hide')) {
        document.getElementById('id_twg_bmp_top_' + scion_id).style.display = "block";
        document.getElementById('id_twg_bmp_btm_' + scion_id).style.display = "block";
        document.getElementById('id_twg_cntn_' + scion_id).style.display = "block";
        document.getElementById('id_twg_cntnr_' + scion_id).classList.add('stt_show');
        document.getElementById('id_twg_cntnr_' + scion_id).classList.remove('stt_hide');
    }
}

function showHideStmExp(lf_id) {
    var twg_clss = document.getElementById(`${lf_id}_lf_stm_olst_exp`).className;
   // `${lf_id}_stm_olst_exp`
   console.log(twg_clss);
    if (twg_clss.includes('stt_show')) {
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_top`).style.display = "none";
        console.log("1");
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_btm`).style.display = "none";
        console.log("2");
        document.getElementById(`${lf_id}_lf_stm_olst_exp_cntn`).style.display = "none";
        console.log("3");
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.add('stt_hide');
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.remove('stt_show');
    } else if (twg_clss.includes('stt_hide')) {
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_top`).style.display = "block";
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_btm`).style.display = "block";
        document.getElementById(`${lf_id}_lf_stm_olst_exp_cntn`).style.display = "block";
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.add('stt_show');
        document.getElementById(`${lf_id}_lf_stm_olst_exp`).classList.remove('stt_hide');
    }
}

function mnu_showHide_top(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_cntnr_${scion_id}`);
    cnt.classList.toggle("active");
    var panel = document.getElementById(`mnu_accrd_cntn_${scion_id}`);
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
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

function mnu_active_entry(scion_id) {
    var cnt = document.getElementById(`mnu_accrd_entry_${scion_id}`);
    cnt.classList.toggle("active");

    if (cnt.style['background-color'] === '#F0F0F0') {
        cnt.style['background-color'] = '#B0B0B0';
    } else {
        cnt.style['background-color'] = '#F0F0F0';
    }
}

function rotatePointer(pnt_id) {
    var pnt_stt = document.getElementById(pnt_id);
    
    if (pnt_stt.className.includes('styl_pnt_0deg')) {
        pnt_stt.classList.add('styl_pnt_30deg');
        pnt_stt.classList.remove('styl_pnt_0deg');
    } else if (pnt_stt.className.includes('styl_pnt_30deg')) {
        pnt_stt.classList.add('styl_pnt_0deg');
        pnt_stt.classList.remove('styl_pnt_30deg');
    }
    
};
            
function generatePointer(scion_id, lf_i) {
    const idx2 = `id_pnt_${scion_id}_${lf_i}`;
    var pnter = createElementWithClass('div', 'styl_pointers');
    pnter.classList.add('styl_pnt_0deg');
    pnter.setAttribute('id', idx2);
    pnter.setAttribute('onclick', `rotatePointer('${idx2}')`);
    pnter.innerHTML = "+>&nbsp";
    //let pnt_plus_p = "<div class='styl_pointers' style='display: inline-block' onclick='rotatePointer(" + idx2 + ")' id='" + idx2 + "'>+> </div>";
    return pnter;
};

function gen_Pntr(lf_i, scion_id, pnt_type) {
    var pntr = gen_ECI('div', 'styl_pointers, styl_pnt_0deg', `id_pnt_${scion_id}_${lf_i}`);
    pntr.setAttribute('onclick', `rotatePointer('id_pnt_${scion_id}_${lf_i}')`);
    pntr.innerHTML = "+>&nbsp";
    return pntr;
};

function generateLeafIdNum(scion_id, lf_i) {
    
    if (scion_id == undefined) {
        var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
        var rando = randy * randy * randy;
        const lf_idx = "lf_" + rando + "_" + lf_i;
        var lf_id = `id_lf_${lf_idx}_${lf_i}`;
    } else {
        var lf_id = `id_lf_${scion_id}_${lf_i}`;
    }
    return lf_id;
};
function generateBladeIdNum(scion_id, lf_i) {
    //var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
    //var rando = randy * randy * randy;
    //const lf_id = "lf_" + rando + "_" + xx;
    var bld_id = `id_lf_bld_${scion_id}_${lf_i}`;
    return bld_id;
};

function generateLeafletIdNum(xx) {
    var randy = (Math.floor(Math.random() * (111 - 1) + 1)) * (Math.floor(Math.random() * (111 - 1) + 1)) * ((Math.floor(Math.random() * 111) + 1));
    var rando = randy * randy * randy;
    const leaflet_id = "leaflet_" + rando + "_" + xx;
    return leaflet_id;
}

function generateTag(lf_id, twig_tag) {
    var lf_tag_id = `${lf_id}_tag`;
    var lf_tag_full = createElementWithClass('div', 'styl_tag');
    lf_tag_full.setAttribute('id', lf_tag_id);
    lf_tag_full.setAttribute('onclick', `showHide('${lf_id}')`);
    lf_tag_full.innerHTML = `[${twig_tag}] ::&nbsp`;
    return lf_tag_full;
}

function showHide(idx) {
    var bld_cntn = document.getElementById(`${idx}_cntn`);
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

function generateBranchID(pnt) {
    const brnch_id = "brnch_id_" + pnt;
}

function gen_term(lf_id, lf_term) {
    if (lf_term == undefined) {
        return undefined;
    } else {
        const term_id = "term_" + lf_id;
        var term = createElementWithClass('div', 'styl_main_term');
        term.setAttribute('id', term_id);
        term.innerHTML = lf_term;
        var term_pkg = `<span class='styl_main_term' id='${term_id}'>${lf_term}</span>`;
        return term;
    }
}           


            // function gen_leaflet(lf, leaf_cntn) {
            //     var entries = createElementWithClass('li', 'styl_list_entry_ext');
            //     var leaflet_id = generateLeafletIdNum(lf);
            //     var pnter = generatePointer(leaflet_id);
            //     var cntn_full = generateCntn(leaflet_id, leaf_cntn);  
            //     var leaflet_full = pnter + " " + cntn_full;                  
            //     entries.innerHTML = leaflet_full;
            //     return entries;
            // }


function gen_lf(lf_i, lf) {
    switch (lf.insc_type) {
        case 'li_entr':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var lf_sld = createElementWithClass('span', 'styl_pointers');
            var lf_pnt = generatePointer(lf.scion_id, lf_i);
            var lf_trm = gen_term(lf_id, lf.insc_term);
            var lf_cntnr = createElementWithClass('div', 'styl_lf_lst_entr');
            var lf_protrusion = createElementWithClass('div', 'styl_lf_protrusion');
            var lf_leaflets = createElementWithClass('div', 'styl_lf_leaflets');
            
            lf_sld.innerHTML = bmp_sld_01;
            lf_protrusion.appendChild(lf_sld);
            lf_protrusion.appendChild(lf_pnt);
            lf_protrusion.appendChild(lf_trm);

            lf_cntnr.appendChild(lf_protrusion);
            lf_cntnr.appendChild(lf_leaflets);
            return lf_cntnr;

        case 'in_txt':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var lf_sld = createElementWithClass('span', 'styl_pointers');
            var lf_pnt = generatePointer(lf.scion_id, lf_i);
            //var lf_trm = gen_term(lf_id, lf.insc_term);
            var lf_cntnr = createElementWithClass('div', 'styl_lf_lst_entr');
            var lf_protrusion = createElementWithClass('div', 'styl_lf_protrusion');
            //var lf_leaflets = createElementWithClass('div', 'styl_lf_leaflets');
            var lf_cntn = createElementWithClass('div', 'styl_in_txt');
            lf_cntn.innerHTML = lf.insc_cntn;

            lf_sld.innerHTML = bmp_sld_01;
            lf_protrusion.appendChild(lf_sld);
            lf_protrusion.appendChild(lf_pnt);
            lf_protrusion.appendChild(lf_cntn);

            lf_cntnr.appendChild(lf_protrusion);
            //lf_cntnr.appendChild(lf_leaflets);
            return lf_cntnr;

        // case 'li_cite':
        //     var lf_id = generateLeafIdNum(scion_id, lf_i);
        //     var lf_sld = createElementWithClass('span', 'styl_pointers');
        //     var lf_pnt = generatePointer(scion_id, lf_i);
        //     var lf_trm = gen_term(lf_id, lf_term);
        //     var lf_cntnr = createElementWithClass('div', 'styl_lf_lst_entr');
        //     var lf_protrusion = createElementWithClass('div', 'styl_lf_protrusion');
        //     var lf_leaflets = createElementWithClass('div', 'styl_lf_leaflets');
                
        //     lf_sld.innerHTML = bmp_sld_01;
        //     lf_protrusion.appendChild(lf_sld);
        //     lf_protrusion.appendChild(lf_pnt);
        //     lf_protrusion.appendChild(lf_trm);
    
        //     lf_cntnr.appendChild(lf_protrusion);
        //     lf_cntnr.appendChild(lf_leaflets);
        //     return lf_cntnr;
                    
        case 'blade':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var bld_id = generateBladeIdNum(lf.scion_id, lf_i);
            var pnter = gen_Pntr(lf_i, lf.scion_id);
            var bld_tag = generateTag(bld_id, lf.insc_tag);
            var bld_term = gen_term(lf_id, lf.insc_term);
            var lf_cntnr = createElementWithClass('div', 'styl_lf_cntnr');
                        
            lf_cntnr.setAttribute('id', lf_id);
            var lf_bld = createElementWithClass('div', 'styl_lf_bld');
            lf_bld.setAttribute('id', `${bld_id}_cntn`);
            lf_bld.classList.add('stt_show');
            lf_bld.innerHTML = lf.insc_cntn;

            var lf_sld = createElementWithClass('span', 'styl_pointers');
            lf_sld.innerHTML = bmp_sld_01;
            lf_cntnr.appendChild(lf_sld);
            lf_cntnr.appendChild(pnter);
            lf_cntnr.appendChild(bld_tag);

            if (bld_term !== undefined) {
                lf_cntnr.appendChild(bld_term);
                var lf_eqls = createElementWithClass('div', 'styl_pointers');
                lf_eqls.innerHTML = bmp_def;
                lf_cntnr.appendChild(lf_eqls);
                lf_cntnr.appendChild(lf_bld);
                            
            } else {
                lf_cntnr.appendChild(lf_bld);
            }

            return lf_cntnr;

        //             case 'bld_smp_itr':
        //                 var lf_id = generateLeafIdNum(scion_id, lf_i);
        //                 var pnter = generatePointer(scion_id, lf_i);
        //                 var bld_term = gen_term(lf_id, lf_term);
        //                 var bld_cntn = createElementWithClass('div', 'styl_bld_smp_itr');
        //                 var itr = createElementWithClass('span', 'styl_lf_itr_num');
        //                 itr.innerHTML = `${bld_itr}&nbsp`;
        //                 bld_cntn.appendChild(itr);
        //                 bld_cntn.appendChild(pnter);
        //                 bld_cntn.appendChild(bld_term);
        //                 //bld_cntn.innerHTML = `${bld_itr}<span class='styl_entr_intro'>${pnter}</span>&nbsp${bld_term}<br>`;
        //                 return bld_cntn;

        //             case 'li_ext':
        //                 var lf_id = generateLeafIdNum(scion_id, lf_i);
        //                 var pnter = generatePointer(scion_id, lf_i);
        //                 var bld_id = generateBladeIdNum(scion_id, lf_i);
        //                 var lf_bld = createElementWithClass('div', 'styl_lf_li_ext_bld');
        //                 lf_bld.setAttribute('id', `${bld_id}_cntn`);
        //                 lf_bld.classList.add('stt_show');
                        

        //                 //var lf_cntn_full = generateCntn(lf_id, lf_cntn);
        //                 var lf_full = createElementWithClass('div', 'styl_lf_li_ext');
        //                 lf_full.appendChild(pnter);
        //                 lf_full.appendChild(lf_bld);
        //                 //var blade_full = pnter + " " + cntn_full;
        //                 return lf_full;
        //                 break;

        case 'entry':
            console.log(lf.insc_type);
            break;

        case 'stm_olst_exp':
            var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
            var pnter = generatePointer(lf.scion_id, lf_i);
            var bld_id = generateBladeIdNum(lf.scion_id, lf_i);

            var lf_cntnr = gen_ECI('div', 'styl_lf_stm_olst_exp stt_hide', `${lf_id}_lf_stm_olst_exp`);
            var lf_bmp_top = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_top', `${lf_id}_lf_stm_olst_exp_bmp_top`);
            var lf_ttl = gen_ECI('div', 'styl_lf_stm_olst_exp_ttl', `${lf_id}_lf_stm_olst_exp_ttl`);
            var lf_cntn = gen_ECI('div', 'styl_lf_stm_olst_exp_cntn', `${lf_id}_lf_stm_olst_exp_cntn`);
            var lf_ls_shrt = gen_ECI('div', 'styl_lf_stm_olst_exp_ls_shrt', `${lf_id}_lf_stm_olst_exp_ls_short`);
            var lf_bmp_cycl = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_cycl', `${lf_id}_lf_stm_olst_exp_bmp_cycl`);
            var lf_expnd = gen_ECI('div', 'styl_lf_stm_olst_exp_expnd', `${lf_id}_lf_stm_olst_exp_expnd`);
            var lf_bmp_btm = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_btm', `${lf_id}_lf_stm_olst_exp_bmp_btm`);

            lf_bmp_top.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
            lf_bmp_btm.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
            lf_bmp_cycl.innerHTML = "------- ------- -------<br>------- -------<br>-------";
            lf_ttl.innerHTML = `${pnt_branch}&nbsp${lf.insc_ttl}&nbsp`;

            lf_bmp_btm.setAttribute('onclick', `showHideStmExp('${lf_id}');`);
            lf_bmp_top.setAttribute('onclick', `showHideStmExp('${lf_id}');`);
            lf_ttl.setAttribute('onclick', `showHideStmExp('${lf_id}');`);

            lf_cntn.append(lf_ls_shrt, lf_bmp_cycl, lf_expnd);

            lf_cntnr.append(lf_bmp_top, lf_ttl, lf_cntn, lf_bmp_btm);

            for (lfl in lf.scions) {
                var lfl_shrt = createElementWithClass('div', 'styl_lfl_shrt');
                var lfl_shrt_pnter = generatePointer(lf.scion_id[lfl].scion_id, lf_i);
                var lfl_shrt_term = createElementWithClass('a', 'styl_lfl_shrt_term');
                lfl_shrt_term.setAttribute('href', `#id_twg_cntn_${lf.scion_id}_${lfl}`);
                lfl_shrt_term.innerHTML = lf.scions[lfl].insc_term;
                
                lfl_shrt.append(lfl_shrt_pnter, lfl_shrt_term);
                lf_ls_shrt.appendChild(lfl_shrt);
                var twg_cntnr = gen_ECI('div', 'styl_twg_cntnr stt_hide', `id_twg_cntnr_${lf.scion_id}_${lfl}`);
                var twg_bmp_top = gen_ECI('div', 'styl_twg_bmp_top', `id_twg_bmp_top_${lf.scion_id}_${lfl}`);
                var twg_ttl = gen_ECI('div', 'styl_twg_ttl', `id_twg_ttl_${lf.scion_id}_${lfl}`);
                var twg_cntn = gen_ECI('div', 'styl_twg_cntn', `id_twg_cntn_${lf.scion_id}_${lfl}`);
                var twg_bmp_btm = gen_ECI('div', 'styl_twg_bmp_btm', `id_twg_bmp_btm_${lf.scion_id}_${lfl}`);
                twg_ttl.setAttribute('onclick', `showHideTwig('${lf.scion_id}_${lfl}');`);
                twg_bmp_top.setAttribute('onclick', `showHideTwig('${lf.scion_id}_${lfl}');`);
                twg_bmp_btm.setAttribute('onclick', `showHideTwig('${lf.scion_id}_${lfl}');`);
                twg_bmp_top.innerHTML = "---<br>--- ---";
                twg_bmp_btm.innerHTML = "---- ----<br>----";
                twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp<span class='styl_lfl_ttl_term'>${lf.scions[lfl].insc_term}</span>&nbsp<span class='styl_pointers'>::</span>`;

                twg_cntnr.appendChild(twg_bmp_top);
                twg_cntnr.appendChild(twg_ttl);
                twg_cntnr.appendChild(twg_cntn);
                twg_cntnr.appendChild(twg_bmp_btm);
                lf_expnd.appendChild(twg_cntnr);
                
                for (i2 in lf.scions[lfl].scions) {
                    console.log(lf.scions[lfl].scions[i2]);
                    var entr_full = gen_lf(i2, lf.scions[lfl].scions[i2]);
                    console.log(entr_full);
                    twg_cntn.appendChild(entr_full);
                }
            }
            return lf_cntnr;

        case 'stm_olst_exp_i':
            var in_id = generateLeafIdNum(lf.scion_id, lf_i);
            var in_cntnr = gen_ECI('div', 'styl_in_cntnr', `id_in_${in_id}`);
            var in_pnter = generatePointer(lf.scion_id, lf_i);
            var in_ttl = createElementWithClass('div', 'styl_lf_lst_entr');
            in_ttl.innerHTML = lf.insc_ttl;
            in_cntnr.append(in_pnter, in_ttl);
            return in_cntnr;
        
        case 'stm_list':
            var stm_id = `id_stm_${lf.scion_id}`;    
            var stm_name = lf.insc_ttl;    
            var stm_cntnr = gen_ECI('div', 'styl_stm_cntnr stt_show', `id_stm_cntnr_${lf.scion_id}`);
            var stm_bmp_top = gen_ECI('div', 'styl_stm_bmp_top', `id_stm_bmp_top_${lf.scion_id}`);
            var stm_nametag = gen_ECI('div', 'styl_stm_nametag', `id_stm_nametag_${lf.scion_id}`);
            var stm_trstlbrd = gen_ECI('div', 'styl_stm_trstlbrd', `id_stm_trstlbrd_${lf.scion_id}`);
            var stm_bmp_btm = gen_ECI('div', 'styl_stm_bmp_btm', `id_stm_bmp_btm_${lf.scion_id}`);

            stm_nametag.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            stm_bmp_top.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            stm_bmp_btm.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            
            stm_bmp_top.innerHTML = bmp_stem_top;
            stm_nametag.innerHTML = `${pnt_branch} <span id='${stm_id}'>${stm_name}</span> ::`;
            stm_bmp_btm.innerHTML = bmp_stem_bttm;
            
            stm_cntnr.append(stm_bmp_top, stm_nametag, stm_trstlbrd, stm_bmp_btm);
            
            for (i2 in lf.scions) {
                var entr_full = gen_lf(i2, lf.scions[i2]);
                stm_trstlbrd.appendChild(entr_full);
            }        
            return stm_cntnr;

        case 'stm':
            var stm_id = `id_stm_${lf.scion_id}`;    
            var stm_name = lf.insc_ttl;    
            var stm_cntnr = gen_ECI('div', 'styl_stm_cntnr stt_hide', `id_stm_cntnr_${lf.scion_id}`);
            var stm_bmp_top = gen_ECI('div', 'styl_stm_bmp_top', `id_stm_bmp_top_${lf.scion_id}`);
            var stm_nametag = gen_ECI('div', 'styl_stm_nametag', `id_stm_nametag_${lf.scion_id}`);
            var stm_trstlbrd = gen_ECI('div', 'styl_stm_trstlbrd', `id_stm_trstlbrd_${lf.scion_id}`);
            var stm_bmp_btm = gen_ECI('div', 'styl_stm_bmp_btm', `id_stm_bmp_btm_${lf.scion_id}`);

            stm_nametag.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            stm_bmp_top.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            stm_bmp_btm.setAttribute('onclick', `showHideStem('${lf.scion_id}');`);
            
            stm_bmp_top.innerHTML = bmp_stem_top;
            stm_nametag.innerHTML = `${pnt_branch} <span id='${stm_id}'>${stm_name}</span> ::`;
            stm_bmp_btm.innerHTML = bmp_stem_bttm;
            
            stm_cntnr.append(stm_bmp_top, stm_nametag, stm_trstlbrd, stm_bmp_btm);
            
            for (i2 in lf.scions) {
                var entr_full = gen_lf(i2, lf.scions[i2]);
                stm_trstlbrd.appendChild(entr_full);
            }        
            return stm_cntnr;

                    // case 'li_entr':
                    //     var lf_id = generateLeafIdNum(lf_i);
                    //     var pnter = generatePointer(lf_id);
                    //     var lf_term = gen_term(lf_id, lf_term);
                    //     var blade_full = createElementWithClass('li', 'styl_blade');
                    //     var blade_text = "<span class='styl_entr_intro'>\\_" + pnter + "</span> " + lf_term + "<br>";
                    //     blade_full.innerHTML = blade_text;
                    //     return blade_text;


                }
            }



async function fetchy(zz) {
    var mainContainer = document.getElementById("trestleboard");
    mainContainer.innerHTML = "";
    fetch(zz)
        .then(response => {
            return response.json();
        })
        .then(data => {
            function gen_head(data) {                      
                var mainContainer = document.getElementById('trestleboard');
                var headBoard = createElementWithClass('div', 'branch_container');
                
                var ls_ttl = createElementWithClass('div', 'styl_head_ttle');
                var lsid = createElementWithClass('div', 'styl_head_lsid');
                var directory_div = createElementWithClass('div', 'styl_head_drct');
                var directory_name = createElementWithClass('div', 'styl_drct_name');
                var directory_cntn = createElementWithClass('div', 'styl_drct_cntn');
                var headboard_tail = createElementWithClass('div', 'styl_head_tail');
                lsid.innerHTML = `<br><span class='styl_pointers'>-></span> <strong><u>LS-ID</u></strong>:&nbsp${data.ls_id}<br><br>`;
               
                ls_ttl.innerHTML = "<img src='Seal.jpg' width='333' height='333'></img><br>" + "-> " + data.ls_ttl + " <-";
                
                headBoard.appendChild(ls_ttl);
                headBoard.appendChild(lsid);
                headboard_tail.innerHTML = "<br><br>" + bmp_brnch_tail;
                directory_name.innerHTML = `<span class='styl_pointers'>-></span> <strong><u>Directory to ${data.ls_id}</strong></u>:`;
                mainContainer.appendChild(headBoard);
                headBoard.appendChild(directory_div);
                directory_div.appendChild(directory_name);
                directory_div.appendChild(directory_cntn);
                headBoard.appendChild(headboard_tail);
                for (i in data.scions) {
                    var drct_i = createElementWithClass('div', 'styl_drct_item');
                    var drct_i_pnt = generatePointer(data.scions[i].scion_id, i);
                    var drct_i_ttl = createElementWithClass('a', 'styl_drct_item_ttl');
                    drct_i_ttl.setAttribute('href', `#id_b_cntnr_${data.scions[i].scion_id}`);
                    drct_i_ttl.innerHTML = `${data.scions[i].drct_id} = ${data.scions[i].drct_ttl}`;
                    drct_i.appendChild(drct_i_pnt);
                    drct_i.appendChild(drct_i_ttl);
                    directory_cntn.appendChild(drct_i);
                }
            };
            gen_head(data);

            function pop_main(data) {
                var trst_cntnr = document.getElementById("trestleboard");
                var trst_brnchs = data.scions;
                for (i in trst_brnchs) {
                    var brnch_id = trst_brnchs[i].scion_id;
                    var brnch_name = trst_brnchs[i].drct_id + " = " + trst_brnchs[i].drct_ttl;
                    var brnch_cntnr = gen_ECI('div', 'styl_brnch_cntnr', `id_b_cntnr_${brnch_id}`);
                    var brnch_bmp_top = gen_ECI('div', 'styl_brnch_bmp_top', `id_b_bmp_top_${brnch_id}`);
                    var brnch_nametag = gen_ECI('div', 'styl_brnch_nametag', `id_b_nametag_${brnch_id}`);
                    var brnch_trstlbrd = gen_ECI('div', 'styl_brnch_trstlbrd', `id_b_trstlbrd_${brnch_id}`);
                    var brnch_bmp_btm = gen_ECI('div', 'styl_brnch_bmp_btm', `id_b_bmp_btm_${brnch_id}`);
                    
                    brnch_bmp_top.innerHTML = "---<br>--- ---<br>--- --- ---";
                    brnch_bmp_btm.innerHTML = "---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----";
                    brnch_nametag.innerHTML = `<span class='styl_shvl_s0' id='id_b_p_${brnch_id}' onclick='shovelDigging(\"${brnch_id}\")'>-></span> <span class='styl_brnch_nametag_name'>${brnch_name}</span>:`;
                
                    brnch_cntnr.append(brnch_bmp_top, brnch_nametag, brnch_trstlbrd, brnch_bmp_btm);
                    trst_cntnr.appendChild(brnch_cntnr);

                    var stems = trst_brnchs[i].scions;
                    for (i2 in stems) {
                        brnch_trstlbrd.appendChild(gen_lf(i2, stems[i2]));
                    }
                }
            }
            pop_main(data);
        })
        .catch(err => {
            console.log(err);
        })
}

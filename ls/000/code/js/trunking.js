let pnt_plus = "<div class='styl_pointers'>+> </div>" + " ";
let pnt_minus = "<div class='styl_pointers' id='pntmns' onclick='rotatePointer()'>-> </div>" + " ";
let pnt_branch = "<div class='styl_pointers'>]}=> </div>" + " ";
let pnt_lixp = "<div class='styl_pointers'>+=>&nbsp</div>";
let bmp_brnch_top = "---<br>--- ---<br>--- --- ---";
let bmp_brnch_btm = "---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----<br>---- ---- ---- ----";
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
            
// function generatePointer(scion_id, lf_i) {
//     const idx2 = `id_pnt_${scion_id}_${lf_i}`;
//     var pnter = createElementWithClass('div', 'styl_pointers');
//     pnter.classList.add('styl_pnt_0deg');
//     pnter.setAttribute('id', idx2);
//     pnter.setAttribute('onclick', `rotatePointer('${idx2}')`);
//     pnter.innerHTML = "+>&nbsp";
//     //let pnt_plus_p = "<div class='styl_pointers' style='display: inline-block' onclick='rotatePointer(" + idx2 + ")' id='" + idx2 + "'>+> </div>";
//     return pnter;
// };

function gen_Pntr(lf_i, scion_id, pnt_type) {
    var pntr = gen_ECI('div', 'styl_pointers styl_pnt_0deg', `id_pnt_${scion_id}_${lf_i}`);
    pntr.setAttribute('onclick', `rotatePointer('id_pnt_${scion_id}_${lf_i}')`);
    if (pnt_type !== undefined) {
        pntr.innerHTML = `${pnt_type}&nbsp`;
    } else {
        pntr.innerHTML = "+>&nbsp;";
    }
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
    var lf_tag_full = gen_ECI('div', 'styl_tag', lf_tag_id);
    lf_tag_full.setAttribute('onclick', `showHide('${lf_id}')`);
    lf_tag_full.innerHTML = `[${twig_tag}] ::&nbsp`;
    return lf_tag_full;
}

function generateBranchID(pnt) {
    const brnch_id = "brnch_id_" + pnt;
}

function gen_term(lf_id, lf_term) {
    if (lf_term == undefined) {
        return undefined;
    } else {
        var trm = gen_ECI('div', 'styl_main_term', `term_${lf_id}`);
        trm.innerHTML = lf_term;
        return trm;
    }
}           

function gen_Insc(insc_i, scion) {
    var insc_id = generateLeafIdNum(scion.scion_id, insc_i);
    switch (scion.insc_typ1) {
        case 'stm':
            var stm_id = `id_stm_${insc_id}`;    
            var stm_name = scion.insc_ttl;    
            var stm_cntnr = gen_ECI('div', 'styl_stm_cntnr stt_hide', `id_stm_cntnr_${insc_id}`);
            var stm_bmp_top = gen_ECI('div', 'styl_stm_bmp_top', `id_stm_bmp_top_${insc_id}`);
            var stm_nametag = gen_ECI('div', 'styl_stm_nametag', `id_stm_nametag_${insc_id}`);
            var stm_trstlbrd = gen_ECI('div', 'styl_stm_trstlbrd', `id_stm_trstlbrd_${insc_id}`);
            var stm_bmp_btm = gen_ECI('div', 'styl_stm_bmp_btm', `id_stm_bmp_btm_${insc_id}`);

            stm_nametag.setAttribute('onclick', `showHideStem('${insc_id}');`);
            stm_bmp_top.setAttribute('onclick', `showHideStem('${insc_id}');`);
            stm_bmp_btm.setAttribute('onclick', `showHideStem('${insc_id}');`);   
            stm_cntnr.append(stm_bmp_top, stm_nametag, stm_trstlbrd, stm_bmp_btm); 
        
            switch (scion.insc_typ2) {
                case 'brnch':
                    stm_bmp_top.innerHTML = bmp_stem_top;
                    stm_nametag.innerHTML = `${pnt_branch} <span id='${insc_id}'>${stm_name}</span> ::`;
                    stm_bmp_btm.innerHTML = bmp_stem_bttm;
                    
                    for (i2 in scion.scions) {
                        console.log(scion.scions[i2]);
                        var entr_full = gen_Insc(i2, scion.scions[i2]);
                        stm_trstlbrd.appendChild(entr_full);
                    }
                    break;  

                case 'lst_exp':
                    var lf_ls_shrt = gen_ECI('div', 'styl_lf_stm_olst_exp_ls_shrt', `${insc_id}_lf_stm_olst_exp_ls_short`);
                    var stm_bmp_cycl = gen_ECI('div', 'styl_lf_stm_olst_exp_bmp_cycl', `${insc_id}_lf_stm_olst_exp_bmp_cycl`);
                    var lf_expnd = gen_ECI('div', 'styl_lf_stm_olst_exp_expnd', `${insc_id}_lf_stm_olst_exp_expnd`);

                    stm_bmp_top.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
                    stm_bmp_btm.innerHTML = "--- --- --- --- --- --- --- ||| --- --- --- --- --- --- ---";
                    stm_bmp_cycl.innerHTML = "------- ------- -------<br>------- -------<br>-------";
                    stm_nametag.innerHTML = `${pnt_branch}&nbsp;${stm_name}&nbsp;::`;

                    // stm_bmp_btm.setAttribute('onclick', `showHideStmExp('${insc_id}');`);
                    // stm_bmp_top.setAttribute('onclick', `showHideStmExp('${insc_id}');`);
                    // lf_ttl.setAttribute('onclick', `showHideStmExp('${insc_id}');`);

                    stm_trstlbrd.append(lf_ls_shrt, stm_bmp_cycl, lf_expnd);
                    
                    for (lfl in scion.scions) {
                        var lfl_shrt = createElementWithClass('div', 'styl_lfl_shrt');
                        var lfl_shrt_pnter = gen_Pntr(scion.scions[lfl].scion_id, insc_i);
                        var lfl_shrt_term = createElementWithClass('a', 'styl_lfl_shrt_term');
                        lfl_shrt_term.setAttribute('href', `#id_twg_cntn_${scion.scion_id}_${lfl}`);
                        lfl_shrt_term.innerHTML = scion.scions[lfl].insc_term;
                        lfl_shrt.append(lfl_shrt_pnter, lfl_shrt_term);
                        lf_ls_shrt.appendChild(lfl_shrt);

                        var twg_cntnr = gen_ECI('div', 'styl_twg_cntnr stt_hide', `id_twg_cntnr_${scion.scion_id}_${lfl}`);
                        var twg_bmp_top = gen_ECI('div', 'styl_twg_bmp_top', `id_twg_bmp_top_${scion.scion_id}_${lfl}`);
                        var twg_ttl = gen_ECI('div', 'styl_twg_ttl', `id_twg_ttl_${scion.scion_id}_${lfl}`);
                        var twg_cntn = gen_ECI('div', 'styl_twg_cntn', `id_twg_cntn_${scion.scion_id}_${lfl}`);
                        var twg_bmp_btm = gen_ECI('div', 'styl_twg_bmp_btm', `id_twg_bmp_btm_${scion.scion_id}_${lfl}`);
                        twg_ttl.setAttribute('onclick', `showHideTwig('${scion.scion_id}_${lfl}');`);
                        twg_bmp_top.setAttribute('onclick', `showHideTwig('${scion.scion_id}_${lfl}');`);
                        twg_bmp_btm.setAttribute('onclick', `showHideTwig('${scion.scion_id}_${lfl}');`);
                        twg_bmp_top.innerHTML = "---<br>--- ---";
                        twg_bmp_btm.innerHTML = "---- ----<br>----";
                        twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp<span class='styl_lfl_ttl_term'>${scion.scions[lfl].insc_term}</span>&nbsp<span class='styl_pointers'>::</span>`;

                        twg_cntnr.append(twg_bmp_top, twg_ttl, twg_cntn, twg_bmp_btm);
                        lf_expnd.appendChild(twg_cntnr);
                            
                        for (i2 in lf.scions[lfl].scions) {
                            //console.log(lf.scions[lfl].scions[i2]);
                            var entr_full = gen_Insc(i2, lf.scions[lfl].scions[i2]);
                            //console.log(entr_full);
                            twg_cntn.appendChild(entr_full);
                        }
                    }
                    break;
            }  
            return stm_cntnr;
        
        case 'insc':
            var insc_cntnr = gen_ECI('div', `styl_insc_cntnr styl_${scion.insc_typ1}_${scion.insc_typ2} stt_hide`, `id_insc_cntnr_${insc_id}`);
            var insc_prtr = createElementWithClass('div', 'styl_lf_protrusion');
            var insc_scns = gen_ECI('div', 'styl_in_scns', `id_insc_scns_${insc_id}`);
            insc_cntnr.append(insc_prtr, insc_scns);
            
            if (scion.insc_sld !== undefined) {
                var insc_sld = createElementWithClass('span', 'styl_pointers');
                insc_sld.innerHTML = lf.insc_sld;
                insc_prtr.append(insc_sld);
            }
            if (scion.insc_pntr !== undefined) {
                var insc_pnt = gen_Pntr(insc_i, scion.scion_id, scion.insc_pntr);
            } else {
                var insc_pnt = gen_Pntr(scion.scion_id, insc_i);
            }
            insc_prtr.append(insc_pnt);

            switch (scion.insc_typ2) {
                case 'insc_trm':
                    var insc_trm = gen_term(insc_id, scion.insc_term);
                    insc_prtr.append(insc_trm);
                    break;
                
                case 'insc_trm_stpl':
                    var insc_tag = generateTag(insc_id, scion.insc_tag);    
                    var insc_trm = gen_term(insc_id, scion.insc_term);
                    insc_prtr.append(insc_tag, insc_trm);            
                    break;

                case 'insc_lnk_stpl':
                    var insc_tag = generateTag(insc_id, scion.insc_tag);    
                    var insc_lnk = gen_term(insc_id, scion.insc_cntn);
                    insc_prtr.append(insc_tag, insc_lnk);            
                    break;

                case 'insc_txt':
                    var insc_cntn = createElementWithClass('div', 'styl_insc_txt');
                    insc_cntn.innerHTML = scion.insc_cntn;
                    insc_prtr.append(insc_cntn);
                    break;

                case 'insc_txt_itr':
                    var insc_cntn = createElementWithClass('div', 'styl_insc_txt');
                    insc_cntn.innerHTML = scion.insc_cntn;
                    var insc_itr = createElementWithClass('span', 'styl_lf_itr_num');
                    insc_itr.innerHTML = `${scion.insc_itr}&nbsp;`;
                    insc_prtr.append(insc_itr, insc_cntn);
                    break;

                case 'blade':
                    var bld_id = generateBladeIdNum(scion.scion_id, insc_i);
                    var insc_tag = generateTag(bld_id, scion.insc_tag);
                    var insc_arm = gen_ECI('div', 'styl_in_arm', `id_in_arm_${bld_id}`);
                    var insc_term = gen_term(insc_id, scion.insc_term);
                    var insc_cntn = gen_ECI('div', 'styl_lf_bld stt_show', `${bld_id}_cntn`);
                    insc_cntn.innerHTML = scion.insc_cntn; 
                    insc_prtr.append(insc_tag, insc_arm);

                    if (insc_term !== undefined) {
                        var lf_eqls = createElementWithClass('div', 'styl_pointers');
                        lf_eqls.innerHTML = bmp_def;
                        insc_arm.append(insc_term, lf_eqls, insc_cntn);      
                    } else {
                        insc_arm.appendChild(insc_cntn);
                    }
                    break;
            }
            if (scion.scions !== undefined) {
                for (x in scion.scions) {
                    insc_scns.appendChild(gen_Insc(x, scion.scions[x]));
                }
            } else {
                var nomo = gen_ECI('div', 'styl_bmp_nomo', `id_insc_scns_nomo_${insc_id}`);
                nomo.innerHTML = "\\_+> No more content";
                insc_scns.append(nomo);
            }
            return insc_cntnr;
    }

}

function gen_lf(lf_i, lf) {
    var lf_id = generateLeafIdNum(lf.scion_id, lf_i);
    var in_cntnr = gen_ECI('div', `styl_lf_cntnr styl_lf_${lf.insc_type} stt_hide`, `${lf_id}_lf_cntnr`);
    var in_prtr = createElementWithClass('div', 'styl_lf_protrusion');
    in_cntnr.appendChild(in_prtr);
    
    if (lf.insc_sld !== undefined) {
        var in_sld = createElementWithClass('span', 'styl_pointers');
        in_sld.innerHTML = lf.insc_sld;
        in_prtr.append(in_sld);
    }

    if (lf.insc_pntr !== undefined) {
        var in_pnt = gen_Pntr(lf_i, lf.scion_id, lf.insc_pntr);
    } else {
        var in_pnt = gen_Pntr(lf.scion_id, lf_i);
    }

    switch (lf.insc_type) {
        case 'in_trm':
            var in_trm = gen_term(lf_id, lf.insc_term);
            in_prtr.append(in_pnt, in_trm);
            break;

        case 'in_trm_stpl':
            var in_tag = generateTag(lf_id, lf.insc_tag);    
            var in_trm = gen_term(lf_id, lf.insc_term);
            in_prtr.append(in_pnt, in_tag, in_trm);            
            break;

        case 'in_lnk_stpl':
            var in_tag = generateTag(lf_id, lf.insc_tag);    
            var in_lnk = gen_term(lf_id, lf.insc_cntn);
            in_prtr.append(in_pnt, in_tag, in_lnk);            
            break;

        case 'in_txt':
            var in_cntn = createElementWithClass('div', 'styl_in_txt');
            in_cntn.innerHTML = lf.insc_cntn;
            in_prtr.append(in_pnt, in_cntn);
            break;

        case 'in_itr_txt':
            var in_cntn = createElementWithClass('div', 'styl_in_txt');
            in_cntn.innerHTML = lf.insc_cntn;
            var in_itr = createElementWithClass('span', 'styl_lf_itr_num');
            in_itr.innerHTML = `${lf.insc_itr}&nbsp;`;
            in_prtr.append(in_itr, in_pnt, in_cntn);
            break;
                    
        case 'blade':
            var bld_id = generateBladeIdNum(lf.scion_id, lf_i);
            var in_tag = generateTag(bld_id, lf.insc_tag);
            var in_arm = gen_ECI('div', 'styl_in_arm', `id_in_arm_${bld_id}`);
            var bld_term = gen_term(lf_id, lf.insc_term);
            var lf_bld = gen_ECI('div', 'styl_lf_bld stt_show', `${bld_id}_cntn`);
            lf_bld.innerHTML = lf.insc_cntn; 
            in_prtr.append(in_pnt, in_tag, in_arm);

            if (bld_term !== undefined) {
                var lf_eqls = createElementWithClass('div', 'styl_pointers');
                lf_eqls.innerHTML = bmp_def;
                in_arm.append(bld_term, lf_eqls, lf_bld);      
            } else {
                in_arm.appendChild(lf_bld);
            }
            break;

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


        case 'entry':
            console.log(lf.insc_type);
            break;

        case 'stm_olst_exp':
            var bld_id = generateBladeIdNum(lf.scion_id, lf_i);
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
            lf_ttl.innerHTML = `${pnt_branch}&nbsp;${lf.insc_ttl}&nbsp;::`;

            lf_bmp_btm.setAttribute('onclick', `showHideStmExp('${lf_id}');`);
            lf_bmp_top.setAttribute('onclick', `showHideStmExp('${lf_id}');`);
            lf_ttl.setAttribute('onclick', `showHideStmExp('${lf_id}');`);

            lf_cntn.append(lf_ls_shrt, lf_bmp_cycl, lf_expnd);
            in_prtr.append(lf_bmp_top, lf_ttl, lf_cntn, lf_bmp_btm);

            for (lfl in lf.scions) {
                var lfl_shrt = createElementWithClass('div', 'styl_lfl_shrt');
                var lfl_shrt_pnter = gen_Pntr(lf.scion_id[lfl].scion_id, lf_i);
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
                    //console.log(lf.scions[lfl].scions[i2]);
                    var entr_full = gen_lf(i2, lf.scions[lfl].scions[i2]);
                    console.log(entr_full);
                    twg_cntn.appendChild(entr_full);
                }
            }
            break;

        case 'stm_olst_exp_i':
            var in_id = generateLeafIdNum(lf.scion_id, lf_i);
            var in_cntnr = gen_ECI('div', 'styl_in_cntnr', `id_in_${in_id}`);
            var in_pnter = gen_Pntr(lf.scion_id, lf_i);
            var in_ttl = createElementWithClass('div', 'styl_lf_lst_entr');
            in_ttl.innerHTML = lf.insc_ttl;
            in_prtr.append(in_pnter, in_ttl);
            break;
        
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
            in_prtr.appendChild(stm_cntnr);
            break;

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
            in_prtr.appendChild(stm_cntnr);
            break;

        case 'stm_shrt':
            var stm_id = `id_stm_shrt_${lf.scion_id}`;    
            var stm_name = lf.insc_ttl;    
            var stm_cntnr = gen_ECI('div', 'styl_stm_shrt_cntnr stt_hide', `id_stm_shrt_cntnr_${lf.scion_id}`);
            var stm_bmp_top = gen_ECI('div', 'styl_stm_shrt_bmp_top', `id_stm_shrt_bmp_top_${lf.scion_id}`);
            var stm_nametag = gen_ECI('div', 'styl_stm_shrt_nametag', `id_stm_shrt_nametag_${lf.scion_id}`);
            var stm_trstlbrd = gen_ECI('div', 'styl_stm_shrt_trstlbrd', `id_stm_shrt_trstlbrd_${lf.scion_id}`);
            var stm_bmp_btm = gen_ECI('div', 'styl_stm_shrt_bmp_btm', `id_stm_shrt_bmp_btm_${lf.scion_id}`);

            stm_nametag.setAttribute('onclick', `showHideStemShrt('${lf.scion_id}');`);
            stm_bmp_top.setAttribute('onclick', `showHideStemShrt('${lf.scion_id}');`);
            stm_bmp_btm.setAttribute('onclick', `showHideStemShrt('${lf.scion_id}');`);
            
            stm_bmp_top.innerHTML = bmp_stem_top;
            stm_nametag.innerHTML = `${pnt_branch} <span id='${stm_id}'>${stm_name}</span> ::`;
            stm_bmp_btm.innerHTML = bmp_stem_bttm;
            
            stm_cntnr.append(stm_bmp_top, stm_nametag, stm_trstlbrd, stm_bmp_btm);
            
            for (i2 in lf.scions) {
                var entr_full = gen_lf(i2, lf.scions[i2]);
                stm_trstlbrd.appendChild(entr_full);
            }
            in_prtr.appendChild(stm_cntnr);
            break;

            
    }
    if (lf.scions !== undefined) {
        switch (lf.insc_type) {
            case 'in_trm': case 'in_trm_stpl': case 'in_lnk_stpl': case 'in_txt': case 'blade':
                var leaflets = createElementWithClass('div', 'styl_in_exp_cntnr');
                in_cntnr.append(leaflets);
                for (x in lf.scions) {
                    leaflets.appendChild(gen_lf(x, lf.scions[x]));
                }
                break;
            default:
                break;
        }
    }
    return in_cntnr;
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
                    var drct_i_pnt = gen_Pntr(data.scions[i].scion_id, i);
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
                    
                    brnch_bmp_top.innerHTML = bmp_brnch_top;
                    brnch_bmp_btm.innerHTML = bmp_brnch_btm;
                    brnch_nametag.innerHTML = `<span class='styl_shvl_s0' id='id_b_p_${brnch_id}' onclick='shovelDigging(\"${brnch_id}\")'>-></span> <span class='styl_brnch_nametag_name'>${brnch_name}</span>:`;
                
                    brnch_cntnr.append(brnch_bmp_top, brnch_nametag, brnch_trstlbrd, brnch_bmp_btm);
                    trst_cntnr.appendChild(brnch_cntnr);

                    var stems = trst_brnchs[i].scions;
                    for (i2 in stems) {
                        brnch_trstlbrd.appendChild(gen_Insc(i2, stems[i2]));
                    }
                }
            }
            pop_main(data);
        })
        .catch(err => {
            console.log(err);
        })
}

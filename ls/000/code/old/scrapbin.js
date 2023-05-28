function popDir(data) {
    let drct_rcrd = data.scions
    var drct_main = createElementWithClass('div', 'branch_container');
    var drct_head = createElementWithClass('div', 'styl_drct_head');
    var drct_cntn = gen_ECI('div', 'styl_drct_cntn', 'id_drct_cntn');
    drct_head.innerHTML = "<span class='styl_pointers'>-></span> <strong><u>Full Directory to Liber Silo</u></strong>:";
    drct_main.append(drct_head, drct_cntn);
    trstle_etchngs.appendChild(drct_main);
    for (x in drct_rcrd) {
        gen_dir(drct_rcrd[x]);
    }
}
popDir(data);

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
            lf_ttl.innerHTML = `${flow_brnch}&nbsp;${lf.insc_ttl}&nbsp;::`;

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
            stm_nametag.innerHTML = `${flow_brnch} <span id='${stm_id}'>${stm_name}</span> ::`;
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
            stm_nametag.innerHTML = `${flow_brnch} <span id='${stm_id}'>${stm_name}</span> ::`;
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
            stm_nametag.innerHTML = `${flow_brnch} <span id='${stm_id}'>${stm_name}</span> ::`;
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

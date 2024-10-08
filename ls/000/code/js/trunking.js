function gen_Insc(insc_i, scion) {
    var insc_id = generateLeafIdNum(scion.scion_id, insc_i);
    switch (scion.insc_typ1) {
        case 'stm':
            var stm_id = `id_stm_${insc_id}`;
            var stm_name = scion.insc_ttl;
            
            var stm_cntnr = gen_ECI('div', `styl_${scion.insc_typ1}_${scion.insc_typ2}_cntnr stt_hide`, `id_stm_cntnr_${insc_id}`);
            var stm_bmp_top = gen_ECI('div', `styl_${scion.insc_typ1}_${scion.insc_typ2}_bmp_top`, `id_stm_bmp_top_${insc_id}`);
            var stm_nmtg = gen_ECI('div', `styl_${scion.insc_typ1}_${scion.insc_typ2}_nmtg`, `id_stm_nmtg_${insc_id}`);
            var stm_trstlbrd = gen_ECI('div', `styl_${scion.insc_typ1}_${scion.insc_typ2}_trstlbrd`, `id_stm_trstlbrd_${insc_id}`);
            var stm_bmp_btm = gen_ECI('div', `styl_${scion.insc_typ1}_${scion.insc_typ2}_bmp_btm`, `id_stm_bmp_btm_${insc_id}`);
  
            stm_cntnr.append(stm_bmp_top, stm_nmtg, stm_trstlbrd, stm_bmp_btm);
        
            switch (scion.insc_typ2) {
                case 'brnch':
                    stm_bmp_top.innerHTML = bmp_stm_scrll;
                    stm_nmtg.innerHTML = `${flow_brnch}<span class='stm_ttl' id='${insc_id}'>${stm_name}</span>&nbsp;::`;
                    stm_bmp_btm.innerHTML = bmp_stm_scrll;

                    stm_nmtg.setAttribute('onclick', `showHideStem('${insc_id}');`);
                    stm_bmp_top.setAttribute('onclick', `showHideStem('${insc_id}');`);
                    stm_bmp_btm.setAttribute('onclick', `showHideStem('${insc_id}');`); 
                    
                    for (i2 in scion.scions) {
                        var entr_full = gen_Insc(i2, scion.scions[i2]);
                        stm_trstlbrd.appendChild(entr_full);
                    }
                    break;

                case 'brn':
                    stm_bmp_top.innerHTML = bmp_stm_scrll;
                    stm_nmtg.innerHTML = `${flow_brnch}<span class='stm_ttl' id='${insc_id}'>${stm_name}</span>&nbsp;::`;
                    stm_bmp_btm.innerHTML = bmp_stm_scrll;

                    //insc_xind
    
                    stm_nmtg.setAttribute('onclick', `showHideStem('${insc_id}');`);
                    stm_bmp_top.setAttribute('onclick', `showHideStem('${insc_id}');`);
                    stm_bmp_btm.setAttribute('onclick', `showHideStem('${insc_id}');`); 
                        
                    for (i2 in scion.scions) {
                        var entr_full = gen_Insc(i2, scion.scions[i2]);
                        stm_trstlbrd.appendChild(entr_full);
                    }
                    break;

                case 'bn2':
                    stm_bmp_top.innerHTML = bmp_stm_scrll;
                    stm_nmtg.innerHTML = `${flow_brnch}<span class='stm_ttl' id='${insc_id}'>${stm_name}</span>&nbsp;::`;
                    stm_bmp_btm.innerHTML = bmp_stm_scrll;
    
                    stm_nmtg.setAttribute('onclick', `showHideStem('${insc_id}');`);
                    stm_bmp_top.setAttribute('onclick', `showHideStem('${insc_id}');`);
                    stm_bmp_btm.setAttribute('onclick', `showHideStem('${insc_id}');`); 
                        
                    for (i2 in scion.scions) {
                        var entr_full = gen_Insc(i2, scion.scions[i2]);
                        stm_trstlbrd.appendChild(entr_full);
                    }
                    break;
                
                case 'twg':
                    stm_bmp_top.innerHTML = bmp_twg_top;
                    stm_bmp_btm.innerHTML = bmp_twg_btm;    
                    stm_nmtg.innerHTML = `${flow_twig}<span class='stm_ttl' id='${insc_id}'>${stm_name}</span>&nbsp;::`;
    
                    stm_nmtg.setAttribute('onclick', `showHideTwig('${insc_id}');`);
                    stm_bmp_top.setAttribute('onclick', `showHideTwig('${insc_id}');`);
                    stm_bmp_btm.setAttribute('onclick', `showHideTwig('${insc_id}');`); 
                        
                    for (i2 in scion.scions) {
                        var entr_full = gen_Insc(i2, scion.scions[i2]);
                        stm_trstlbrd.appendChild(entr_full);
                    }
                    break;

                case 'lst_exp':
                    var lf_ls_shrt = gen_ECI('div', 'styl_stm_lst_exp_ls_shrt', `${insc_id}_stm_lst_exp_ls_short`);
                    var stm_bmp_cycl = gen_ECI('div', 'styl_stm_lst_exp_bmp_cycl', `${insc_id}_stm_lst_exp_bmp_cycl`);
                    var stm_expnd = gen_ECI('div', 'styl_stm_lst_exp_expnd', `${insc_id}_stm_lst_exp_expnd`);

                    stm_bmp_top.innerHTML = bmp_stm_scrll;
                    stm_bmp_btm.innerHTML = bmp_stm_scrll;
                    stm_bmp_cycl.innerHTML = "------- ------- -------<br>------- -------<br>-------";
                    stm_nmtg.innerHTML = `${flow_brnch}&nbsp;${stm_name}&nbsp;::`;

                    stm_nmtg.setAttribute('onclick', `showHideStmLstExp('${insc_id}');`);
                    stm_bmp_top.setAttribute('onclick', `showHideStmLstExp('${insc_id}');`);
                    stm_bmp_btm.setAttribute('onclick', `showHideStmLstExp('${insc_id}');`); 

                    stm_trstlbrd.append(lf_ls_shrt, stm_bmp_cycl, stm_expnd);
                    
                    for (lfl in scion.scions) {
                        var lfl_shrt = createElementWithClass('div', 'styl_lfl_shrt');
                        var lfl_shrt_pnter = gen_Pntr(scion.scions[lfl].scion_id, insc_i);
                        var lfl_shrt_term = createElementWithClass('a', 'styl_lfl_shrt_term');
                        lfl_shrt_term.setAttribute('href', `#id_twg_cntn_${scion.scion_id}_${lfl}`);
                        
                        if (scion.scions[lfl].insc_dfin !== undefined) {
                            lfl_shrt_term.innerHTML = `${scion.scions[lfl].insc_term}&nbsp;<span class='styl_extn_trm_dfin_shrt_c'>(<span class='styl_extn_trm_dfin_shrt'><i>${scion.scions[lfl].insc_dfin}</i></span>)</span>`;
                        } else {
                            lfl_shrt_term.innerHTML = scion.scions[lfl].insc_term;
                        }
                        lfl_shrt.append(lfl_shrt_pnter, lfl_shrt_term);
                        lf_ls_shrt.appendChild(lfl_shrt);

                        if (scion.scions[lfl].scions !== undefined) {
                            //console.log(scion.scions[lfl].scions);
                            var twg_cntnr = gen_ECI('div', 'styl_twg_cntnr stt_hide', `id_twg_cntnr_${scion.scion_id}_${lfl}`);
                            var twg_bmp_top = gen_ECI('div', 'styl_twg_bmp_top', `id_twg_bmp_top_${scion.scion_id}_${lfl}`);
                            var twg_ttl = gen_ECI('div', 'styl_twg_ttl', `id_twg_ttl_${scion.scion_id}_${lfl}`);
                            var twg_cntn = gen_ECI('div', 'styl_twg_cntn', `id_twg_cntn_${scion.scion_id}_${lfl}`);
                            var twg_bmp_btm = gen_ECI('div', 'styl_twg_bmp_btm', `id_twg_bmp_btm_${scion.scion_id}_${lfl}`);
                            twg_ttl.setAttribute('onclick', `showHideTwg('${scion.scion_id}_${lfl}');`);
                            twg_bmp_top.setAttribute('onclick', `showHideTwg('${scion.scion_id}_${lfl}');`);
                            twg_bmp_btm.setAttribute('onclick', `showHideTwg('${scion.scion_id}_${lfl}');`);
                            twg_bmp_top.innerHTML = "---<br>--- ---";
                            twg_bmp_btm.innerHTML = "---- ----<br>----";
                            
                            if (scion.scions[lfl].insc_dfin !== undefined) {
                                twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp;<span class='styl_lfl_ttl_term'>{&nbsp;${scion.scions[lfl].insc_term}&nbsp;</span>&nbsp;<span class='styl_extn_trm_dfin_lng_c'>(<span class='styl_extn_trm_dfin_lng'><i>${scion.scions[lfl].insc_dfin}</i></span>)</span>&nbsp;<span class='styl_lfl_ttl_term'>}</span>&nbsp;<span class='styl_pointers'>::</span>`;
                            } else {
                                twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp;<span class='styl_lfl_ttl_term'>{&nbsp;${scion.scions[lfl].insc_term}&nbsp;}</span>&nbsp;<span class='styl_pointers'>::</span>`;
                            }
                           // twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp;<span class='styl_lfl_ttl_term'>{&nbsp;${scion.scions[lfl].insc_term}&nbsp;}</span>&nbsp;<span class='styl_pointers'>::</span>`;

                            twg_cntnr.append(twg_bmp_top, twg_ttl, twg_cntn, twg_bmp_btm);
                            stm_expnd.appendChild(twg_cntnr);

                            for (i2 in scion.scions[lfl].scions) {
                               // console.log(scion.scions[lfl].scions[i2]);
                                var entr_full = gen_Insc(i2, scion.scions[lfl].scions[i2]);
                                //console.log(entr_full);
                                twg_cntn.appendChild(entr_full);
                            }
                        }
                    }
                    break;

                case 'twgs':
                    var lf_ls_shrt = gen_ECI('div', 'styl_stm_lst_exp_ls_shrt', `${insc_id}_stm_lst_exp_ls_short`);
                    var stm_bmp_cycl = gen_ECI('div', 'styl_stm_lst_exp_bmp_cycl', `${insc_id}_stm_lst_exp_bmp_cycl`);
                    var stm_expnd = gen_ECI('div', 'styl_stm_lst_exp_expnd', `${insc_id}_stm_lst_exp_expnd`);

                    stm_bmp_top.innerHTML = bmp_stm_scrll;
                    stm_bmp_btm.innerHTML = bmp_stm_scrll;
                    stm_bmp_cycl.innerHTML = "------- ------- -------<br>------- -------<br>-------";
                    stm_nmtg.innerHTML = `${flow_brnch}&nbsp;${stm_name}&nbsp;::`;

                    stm_nmtg.setAttribute('onclick', `showHideStmLstExp('${insc_id}');`);
                    stm_bmp_top.setAttribute('onclick', `showHideStmLstExp('${insc_id}');`);
                    stm_bmp_btm.setAttribute('onclick', `showHideStmLstExp('${insc_id}');`); 

                    stm_trstlbrd.append(lf_ls_shrt, stm_bmp_cycl, stm_expnd);
                    
                    for (lfl in scion.scions) {
                        var lfl_shrt = createElementWithClass('div', 'styl_lfl_shrt');
                        var lfl_shrt_pnter = gen_Pntr(scion.scions[lfl].scion_id, insc_i);
                        var lfl_shrt_term = createElementWithClass('a', 'styl_lfl_shrt_term');
                        lfl_shrt_term.setAttribute('href', `#id_twg_cntn_${scion.scion_id}_${lfl}`);
                        
                        if (scion.scions[lfl].insc_dfin !== undefined) {
                            lfl_shrt_term.innerHTML = `${scion.scions[lfl].insc_term}&nbsp;<span class='styl_extn_trm_dfin_shrt_c'>(<span class='styl_extn_trm_dfin_shrt'><i>${scion.scions[lfl].insc_dfin}</i></span>)</span>`;
                        } else {
                            lfl_shrt_term.innerHTML = scion.scions[lfl].insc_term;
                        }
                        lfl_shrt.append(lfl_shrt_pnter, lfl_shrt_term);
                        lf_ls_shrt.appendChild(lfl_shrt);

                        var twg_cntnr = gen_ECI('div', 'styl_twg_cntnr stt_hide', `id_twg_cntnr_${scion.scion_id}_${lfl}`);
                        var twg_bmp_top = gen_ECI('div', 'styl_twg_bmp_top', `id_twg_bmp_top_${scion.scion_id}_${lfl}`);
                        var twg_ttl = gen_ECI('div', 'styl_twg_ttl', `id_twg_ttl_${scion.scion_id}_${lfl}`);
                        var twg_cntn = gen_ECI('div', 'styl_twg_cntn', `id_twg_cntn_${scion.scion_id}_${lfl}`);
                        var twg_bmp_btm = gen_ECI('div', 'styl_twg_bmp_btm', `id_twg_bmp_btm_${scion.scion_id}_${lfl}`);
                        twg_ttl.setAttribute('onclick', `showHideTwg('${scion.scion_id}_${lfl}');`);
                        twg_bmp_top.setAttribute('onclick', `showHideTwg('${scion.scion_id}_${lfl}');`);
                        twg_bmp_btm.setAttribute('onclick', `showHideTwg('${scion.scion_id}_${lfl}');`);
                        twg_bmp_top.innerHTML = "---<br>--- ---";
                        twg_bmp_btm.innerHTML = "---- ----<br>----";
                            
                        if (scion.scions[lfl].insc_dfin !== undefined) {
                            twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp;<span class='styl_lfl_ttl_term'>{&nbsp;${scion.scions[lfl].insc_term}&nbsp;</span>&nbsp;<span class='styl_extn_trm_dfin_lng_c'>(<span class='styl_extn_trm_dfin_lng'><i>${scion.scions[lfl].insc_dfin}</i></span>)</span>&nbsp;<span class='styl_lfl_ttl_term'>}</span>&nbsp;<span class='styl_pointers'>::</span>`;
                        } else {
                            twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp;<span class='styl_lfl_ttl_term'>{&nbsp;${scion.scions[lfl].insc_term}&nbsp;}</span>&nbsp;<span class='styl_pointers'>::</span>`;
                        }
                           // twg_ttl.innerHTML = `<span class='styl_pointers'>+=></span>&nbsp;<span class='styl_lfl_ttl_term'>{&nbsp;${scion.scions[lfl].insc_term}&nbsp;}</span>&nbsp;<span class='styl_pointers'>::</span>`;

                        twg_cntnr.append(twg_bmp_top, twg_ttl, twg_cntn, twg_bmp_btm);
                        stm_expnd.appendChild(twg_cntnr);

                        if (scion.scions[lfl].scions !== undefined) {
                            for (i2 in scion.scions[lfl].scions) {
                                console.log(scion.scions[lfl].scions[i2]);
                                var entr_full = gen_Insc(i2, scion.scions[lfl].scions[i2]);
                                //console.log(entr_full);
                                twg_cntn.appendChild(entr_full);
                            }
                        }
                    }
                    break;
            }  
            return stm_cntnr;
        
        case 'insc':
            var insc_cntnr = gen_ECI('div', `styl_insc_cntnr styl_${scion.insc_typ1}_${scion.insc_typ2} stt_hide`, `id_insc_cntnr_${insc_id}`);
            var insc_prtr = createElementWithClass('div', 'styl_lf_protrusion');
            
            if (scion.insc_itrt !== undefined) {
                var in_itrt = gen_ECI('div', `styl_insc_itrt_${scion.insc_itrt[0]}`, `id_insc_itrt_${insc_id}`);
                in_itrt.innerHTML = `${scion.insc_itrt[1]}&nbsp;`;
                insc_prtr.append(in_itrt);
            }
            
            if (scion.insc_wdth !== undefined) {
                insc_prtr.style.width = `${scion.insc_wdth}`;
            }

            if (scion.insc_chut !== undefined) {
                let chut_cntnr = gen_ECI('div', 'styl_chut_cntnr', `id_chut_cntnr_${insc_id}`);
                insc_cntnr.append(chut_cntnr);
                switch (scion.insc_chut) {
                    case '001':
                        chut_cntnr.innerHTML = "||";
                        break;
                    
                    case '002':
                        chut_cntnr.innerHTML = "|";
                        break;
                }
            }

            if (scion.scns_chut !== undefined) {
                var scns_chut = gen_ECI('div', `styl_scns_chut_${scion.scns_chut}`, `id_scns_chut_${scion.scns_chut}_${insc_id}`);
                var insc_scns = gen_ECI('div', `styl_insc_scns_${scion.scns_chut} stt_hide`, `id_insc_scns_${scion.scns_chut}_${insc_id}`);
                insc_cntnr.append(insc_prtr, scns_chut);
                scns_chut.append(insc_scns);
            } else {
                var insc_scns = gen_ECI('div', 'styl_insc_scns stt_hide', `id_insc_scns_${insc_id}`);
                insc_cntnr.append(insc_prtr, insc_scns);
            }

            if (scion.insc_sld !== undefined) {
                var insc_sld = createElementWithClass('span', 'styl_pointers');
                insc_sld.innerHTML = scion.insc_sld;
                insc_prtr.append(insc_sld);
            }
            
            if (scion.insc_pntr !== undefined) {
                var insc_pntr = gen_Pntr(insc_i, insc_id, scion.insc_pntr);
            } else {
                var insc_pntr = gen_Pntr(insc_i, insc_id);
            }         
            
            if (scion.insc_styl !== undefined) {
                insc_prtr.classList.add(`${scion.insc_styl}`);
            }

            if (scion.insc_brdr !== undefined) {
                insc_cntnr.classList.add(`${scion.insc_brdr}`);
            }

            switch (scion.insc_typ2) {
                case 'vid':
                    //var test_path = './ls/000/rsrc/vd/dgtl/yt/yt_ih5R_c16bKc.json';
                    var insc_cntnd = gen_ECI('div', 'styl_temptest', `id_${scion.insc_rsrc}`);
                    insc_prtr.append(insc_cntnd);
                    fetch(scion.insc_path)
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            var container = document.getElementById(`id_${scion.insc_rsrc}`);
                            var rsrc_bit = gen_ECI('div', 'styl_rsrc_vid_bit', `id_${scion.insc_rsrc}_${scion.insc_rsrc}`);
                            rsrc_bit.innerHTML = data['vid_title'];
                            container.append(insc_pntr, rsrc_bit);
                            return;
                        })
                    break;
                
                case 'quot_r':
                    var insc_cntn = gen_ECI('div', 'styl_insc_quot_cntn', `id_${scion.insc_rsrc}`);
                    insc_prtr.append(insc_pntr, insc_cntn);
                    insc_pntr.classList.add('styl_pntr_bg');
                    insc_scns.classList.add('styl_scns_quot_bg');

                    fetch(scion.insc_path)
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            var container = document.getElementById(`id_${scion.insc_rsrc}`);
                            var prtr = document
                            //var rsrc_bit = gen_ECI('div', 'styl_rsrc_vid_bit', `id_${scion.insc_rsrc}_${scion.insc_rsrc}`);
                            container.innerHTML = `<span class='styl_bknd_001 bknd_l'>[</span>\t<span class='styl_insc_quot_wrds'>${data.rsrc_cntnt}</span>\t<span class='styl_bknd_001 bknd_r'>]</span>`;
                            // //container.append(insc_pntr, rsrc_bit);
                            var insc_rfrn_tag = generateTag(scion.insc_rsrc, "Reference");
                            var insc_rfrn_short = gen_ECI('div', 'styl_insc_rfrn_short', `id_insc_rfrf_short_${scion.insc_rsrc}`);
                            insc_rfrn_short.innerHTML = data.rsrc_auth[0]
                            // in_cntnd.append(insc_cntn);
                            // insc_prtr.append(insc_pntr, in_stpl, in_cntnd);
                            return;
                        })

                    break;

                case 'trm':
                    var insc_trm = gen_term(insc_id, scion.insc_term);
                    insc_prtr.style['align-items'] = 'center';

                    if (scion.insc_stpl !== undefined) {
                        if (scion.insc_stpl[0] == 1) {
                            var in_stpl = generateTag(insc_id, scion.insc_stpl[1]);
                            var in_cntnd = gen_ECI('div', 'styl_insc_trm_stpl_cntnd', `id_insc_trm_stpl_cntnd_${insc_id}`);
                            in_cntnd.append(insc_trm);
                            insc_prtr.append(insc_pntr, in_stpl, in_cntnd);
                        } else {
                            insc_prtr.append(insc_pntr, insc_trm);
                        } 
                    } else {
                        insc_prtr.append(insc_pntr, insc_trm);
                    }
                   
                    if (scion.insc_styl !== undefined) {
                        insc_trm.classList.add(`${scion.insc_styl}`);
                    }

                    if (scion.insc_dfin !== undefined) {
                        var insc_dfin = gen_ECI('div', 'dfin_cntnr', `id_trm_dfin_${insc_id}`);
                        insc_dfin.innerHTML = `&nbsp;(<span class='dfin_cntnd'>${scion.insc_dfin}</span>)`;
                        insc_prtr.append(insc_dfin);
                    }

                    if (scion.insc_extr !== undefined) {
                        var insc_extr = gen_ECI('div', `extr_cntnr_${scion.insc_extr[0]}`, `id_trm_extr_${insc_id}`);
                        insc_extr.innerHTML = `&nbsp;(<span class='extr_cntnd_${scion.insc_extr[1]}'>${scion.insc_extr[2]}</span>)`;
                        insc_prtr.append(insc_extr);
                    }

                    if (scion.term_styl !== undefined) {
                        insc_trm.classList.add(`styl_trm_${scion.term_styl}`);
                        insc_pntr.classList.add(`styl_pntr_${scion.term_styl}`);
                        insc_prtr.classList.add(`styl_prtr_trm_${scion.term_styl}`);
                        insc_scns.classList.add(`styl_scns_trm_${scion.term_styl}`);
                        if (insc_sld !== undefined) {
                            insc_sld.classList.add(`styl_sldr_${scion.term_styl}`);
                        }
                    }

                    break;
                
                case 'trm_stpl':
                    var insc_tag = generateTag(insc_id, scion.insc_tag);    
                    var insc_trm = gen_term(insc_id, scion.insc_term);
                    var insc_extn = gen_ECI('div', 'styl_insc_trm_stpl_extn', `id_insc_trm_stpl_extn_${insc_id}`);
                    insc_extn.append(insc_trm);
                    insc_prtr.style['align-items'] = 'center';
                    insc_prtr.append(insc_pntr, insc_tag, insc_extn);
                    
                    if (scion.insc_extr !== undefined) {
                        var insc_extr = gen_ECI('div', `extr_cntnr_${scion.insc_extr[0]}`, `id_trm_extr_${insc_id}`);
                        insc_extr.innerHTML = `&nbsp;(<span class='extr_cntnd_${scion.insc_extr[1]}'>${scion.insc_extr[2]}</span>)`;
                        insc_prtr.append(insc_extr);
                    }

                    break;

                case 'trm_qccl':
                    var insc_tag = generateTag(insc_id, scion.insc_tag);    
                    var insc_trm = gen_term(insc_id, scion.insc_term);
                    var insc_extn = gen_ECI('div', 'styl_insc_trm_stpl_extn', `id_insc_trm_stpl_extn_${insc_id}`);
                    insc_extn.append(insc_trm);
                    insc_tag.style['font-size'] = '19px';
                    insc_prtr.style['align-items'] = 'center';
                    insc_prtr.append(insc_pntr, insc_tag, insc_extn);

                    if (scion.insc_extr !== undefined) {
                        var insc_extr = gen_ECI('div', `extr_cntnr_${scion.insc_extr[0]}`, `id_trm_extr_${insc_id}`);
                        insc_extr.innerHTML = `&nbsp;(<span class='extr_cntnd_${scion.insc_extr[1]}'>${scion.insc_extr[2]}</span>)`;
                        insc_prtr.append(insc_extr);
                    }

                    break;

                case 'lnk':
                    var in_lnk = gen_link(insc_id, scion.insc_cntn);
                    insc_prtr.style['align-items'] = 'center';
                    if (scion.insc_stpl !== undefined) {
                        if (scion.insc_stpl[0] == 1) {
                            var in_stpl = generateTag(insc_id, scion.insc_stpl[1]);
                            var in_cntnd = gen_ECI('div', 'styl_insc_lnk_stpl_cntnd', `id_insc_lnk_stpl_cntnd_${insc_id}`);
                            in_cntnd.append(in_lnk);
                            insc_prtr.append(insc_pntr, in_stpl, in_cntnd);
                        } else {
                            insc_prtr.append(insc_pntr, in_lnk);
                        } 
                    } else {
                        insc_prtr.append(insc_pntr, in_lnk);
                    }    
                    break;

                case 'quot':
                    var insc_cntn = createElementWithClass('div', 'styl_insc_quot_cntn');
                    insc_cntn.innerHTML = `<span class='styl_bknd_001 bknd_l'>[</span>\t<span class='styl_insc_quot_wrds'>${scion.insc_cntn}</span>\t<span class='styl_bknd_001 bknd_r'>]</span>`;
                    insc_prtr.append(insc_pntr, insc_cntn);
                    insc_pntr.classList.add('styl_pntr_bg');
                    insc_scns.classList.add('styl_scns_quot_bg');
                    break;

                case 'txt':
                    var insc_cntn = createElementWithClass('div', 'styl_insc_txt');
                    insc_cntn.innerHTML = scion.insc_cntn; 
                    
                    if (scion.insc_stpl !== undefined) {
                        if (scion.insc_stpl[0] == 1) {
                            var in_stpl = generateTag(insc_id, scion.insc_stpl[1]);
                            var in_cntnd = gen_ECI('div', 'styl_insc_txt_stpl_cntnd', `id_insc_txt_stpl_cntnd_${insc_id}`);
                            in_cntnd.append(insc_cntn);
                            insc_prtr.append(insc_pntr, in_stpl, in_cntnd);
                        } else {
                            insc_prtr.append(insc_pntr, insc_cntn);
                        } 
                    } else {
                        insc_prtr.append(insc_pntr, insc_cntn);
                    }
                    break;

                case 'cxet':
                    var insc_cntn = createElementWithClass('div', 'styl_insc_cxet');
                    insc_cntn.innerHTML = scion.insc_cntn; 
                    
                    if (scion.insc_stpl !== undefined) {
                        if (scion.insc_stpl[0] == 1) {
                            var in_stpl = generateTag(insc_id, scion.insc_stpl[1]);
                            var in_cntnd = gen_ECI('div', 'styl_insc_cxet_stpl_cntnd', `id_insc_txt_stpl_cntnd_${insc_id}`);
                            in_cntnd.append(insc_cntn);
                            insc_prtr.append(insc_pntr, in_stpl, in_cntnd);
                        } else {
                            insc_prtr.append(insc_pntr, insc_cntn);
                        } 
                    } else {
                        insc_prtr.append(insc_pntr, insc_cntn);
                    }
                    break;
                
                case 'txt_stpl':
                    var insc_tag = generateTag(insc_id, scion.insc_tag);    
                    var insc_cntn = createElementWithClass('div', 'styl_insc_txt');
                    insc_cntn.innerHTML = scion.insc_cntn;
                    insc_prtr.append(insc_pntr, insc_tag, insc_cntn);
                    break;

                case 'txt_itr':
                    var insc_cntn = createElementWithClass('div', 'styl_insc_txt');
                    insc_cntn.innerHTML = scion.insc_cntn;
                    var insc_itr = createElementWithClass('span', 'styl_insc_itr');
                    insc_itr.innerHTML = `${scion.insc_itr}&nbsp;`;
                    insc_prtr.append(insc_itr, insc_pntr, insc_cntn);
                    break;

                case 'gem_hbrw':
                    var eqc = gen_ECI('div', 'styl_insc_gem_eqc', `id_gem_eqc${insc_id}`);    
                    var num = gen_ECI('div', 'styl_insc_gem_num', `id_gem_num_${insc_id}`);
                    var eqq = gen_ECI('div', 'styl_insc_gem_eqq', `id_gem_eqq_${insc_id}`);
                    var trm = gen_ECI('div', 'styl_insc_gem_trm', `id_gem_trm_${insc_id}`);
                    num.innerHTML = scion.insc_nmbr;
                    eqq.innerHTML = bmp_def_flow;
                    trm.innerHTML = scion.insc_term;
                    eqc.append(num, eqq, trm);
                    insc_prtr.append(insc_pntr, eqc);
                    break;

                case 'nmbr':
                    var in_nmbr = gen_ECI('div', 'i_nmbr_01_nmb', `id_nmbr_01_nmb_${insc_id}`);
                    in_nmbr.innerHTML = scion.insc_nmbr;
                    insc_prtr.append(insc_pntr, in_nmbr);
                    insc_prtr.classList.add('algn_itm_cntr');
                    break;

                case 'blade':
                    var bld_id = generateBladeIdNum(scion.scion_id, insc_i);
                    var insc_tag = generateTag(bld_id, scion.insc_tag);
                    var insc_arm = gen_ECI('div', 'styl_in_arm', `id_in_arm_${bld_id}`);
                    var insc_term = gen_term(insc_id, scion.insc_term);
                    var insc_cntn = gen_ECI('div', 'styl_lf_bld stt_show', `${bld_id}_cntn`);
                    insc_cntn.innerHTML = scion.insc_cntn; 
                    insc_prtr.append(insc_pntr, insc_tag, insc_arm);

                    if (insc_term !== undefined) {
                        var lf_eqls = createElementWithClass('div', 'styl_pointers');
                        lf_eqls.innerHTML = bmp_def;
                        insc_arm.append(insc_term, lf_eqls, insc_cntn);      
                    } else {
                        insc_arm.appendChild(insc_cntn);
                    }
                    break;

                case 'adjst':
                    if (scion.insc_adjst !== undefined) {
                        insc_scns.classList.add(`${scion.insc_adjst}`);
                    }
                    return;

                case 'tbl_h':
                    var in_tbl = gen_ECI('table', 'tbl_cntnr', `id_tbl_${scion.scion_id}`);
                    var thead = in_tbl.createTHead();
                    var row = thead.insertRow();
                    for (let hd in scion.tabl_head) {
                        let th = document.createElement("th");
                        th.innerHTML = scion.tabl_head[hd];
                        for (ent in scion.tabl_rows[hd]) {
                            console.log(ent);
                            console.log(scion.tabl_rows[hd][ent]);
                            let text = document.createTextNode(scion.tabl_rows[hd][ent]);
                            th.appendChild(text);
                        }
                        row.appendChild(th);
                    }
                    return in_tbl;

                case 'tbl':
                    var in_tbl = gen_ECI('table', 'tbl_cntnr', `id_tbl_${scion.scion_id}`); 
                    switch (scion.tabl_typ1) {
                        case 'dwn_002': 
                            for (let rw in scion.tabl_rows) {
                                var row = in_tbl.insertRow();
                                for (ent in scion.tabl_rows[rw]) {
                                    if (ent == 0) {
                                        var text = document.createElement('td');
                                        text.innerHTML = scion.tabl_rows[rw][ent];
                                        text.classList.add('styl_tabl_lft_001_lf');
                                    } else {
                                        var text = document.createElement('td');
                                        text.innerHTML = scion.tabl_rows[rw][ent];
                                        text.classList.add('styl_tabl_lft_001_rg');
                                    }
                                    row.appendChild(text);
                                }
                                in_tbl.append(row);
                        }
                        break;
                    }
                return in_tbl; 
            }

            if (scion.scions !== undefined) {
                for (x in scion.scions) {
                    insc_scns.appendChild(gen_Insc(x, scion.scions[x]));
                }
            }
            
            var scns_extr = gen_ECI('div', 'styl_insc_scns_extr stt_hide', `id_insc_scns_extr_${insc_id}`);
            if (scion.insc_info !== undefined) {
                var insc_info = gen_ECI('div', 'styl_insc_info', `id_insc_info_${insc_id}`);
                var info_head = gen_ECI('div', 'styl_info_head', `id_info_head_${insc_id}`);
                var info_cntn = gen_ECI('div', 'styl_info_cntn', `id_info_cntn_${insc_id}`);
                info_head.innerHTML = "|&nbsp;|<br>|&nbsp;\\_>>&nbsp;<b>[<u>Metadata</u>]</b>&nbsp; about&nbsp; (<b><i>this data</b></i>)&nbsp;::";
                insc_info.append(info_head, info_cntn);
                for (x in scion.insc_info) {
                    info_cntn.appendChild(gen_Info(x, insc_id, scion.insc_info[x]));
                }
                scns_extr.appendChild(insc_info);
            } else if (scion.insc_info == undefined) {
                var scns_nomo = gen_ECI('div', 'styl_insc_scns_nomo', `id_insc_scns_nomo_${insc_id}`);
                scns_nomo.innerHTML = "\\_+> No more content";
                scns_extr.append(scns_nomo);
            }
            insc_scns.append(scns_extr);

            if (scion.insc_offs !== undefined) {
                insc_cntnr.classList.add(`${scion.insc_offs}`);
            }

            if (scion.insc_algn !== undefined) {
                insc_prtr.classList.add(`${scion.insc_algn}`);
            }

            return insc_cntnr;

        case 'gem':
            var gem_cntnr = gen_ECI('div', `styl_gem_cntnr styl_${scion.insc_typ1}_${scion.insc_typ2} stt_hide`, `id_gem_cntnr_${insc_id}`);
            var gem_prtr = createElementWithClass('div', 'styl_gem_prtr');
            var gem_scns = gen_ECI('div', 'styl_gem_scns stt_hide', `id_gem_scns_${insc_id}`);
            gem_cntnr.append(gem_prtr, gem_scns);
            
            if (scion.insc_sld !== undefined) {
                var gem_sld = createElementWithClass('span', 'styl_pointers');
                gem_sld.innerHTML = scion.insc_sld;
                gem_prtr.append(gem_sld);
            }
            if (scion.insc_pntr !== undefined) {
                var gem_pnt = gen_Pntr(insc_i, insc_id, scion.insc_pntr);
            } else {
                var gem_pnt = gen_Pntr(insc_i, insc_id);
            }
            gem_prtr.append(gem_pnt);

            switch (scion.insc_typ2) {
                case 'hbrw_00':
                    var eqc = gen_ECI('div', 'styl_gem_eqc', `id_gem_eqc_${insc_id}`);    
                    var num = gen_ECI('div', 'styl_gem_num', `id_gem_num_${insc_id}`);
                    var eqq = gen_ECI('div', 'styl_gem_eqq', `id_gem_eqq_${insc_id}`);
                    var trm = gen_ECI('div', 'styl_gem_trm', `id_gem_trm_${insc_id}`);
                    num.innerHTML = scion.insc_nmbr;
                    eqq.innerHTML = bmp_def_flow;
                    trm.innerHTML = scion.insc_term;
                    eqc.append(num, eqq, trm);
                    gem_prtr.append(eqc);
                    break;
            }
            return gem_cntnr;

        case 'flow':
            let flow_cntnr = gen_ECI('div', 'styl_flow_cntnr', `id_flow_cntnr_${insc_id}`);
            switch (scion.insc_typ2) {
                case 'chut':
                    flow_cntnr.innerHTML = scion.insc_chut;
                    break;
            }
            return flow_cntnr;
            
        case 'cite':
            var cite_cntnr = gen_ECI('div', `cite_cntnr styl_${scion.insc_typ1}_${scion.insc_typ2} stt_hide`, `id_insc_cntnr_${insc_id}`);
            var cite_prtr = createElementWithClass('div', 'styl_lf_protrusion');
            var cite_scns = gen_ECI('div', 'cite_scns stt_hide', `id_cite_scns_${insc_id}`);
            cite_cntnr.append(cite_prtr, cite_scns);
            
            if (scion.insc_pntr !== undefined) {
                var insc_pntr = gen_Pntr(insc_i, insc_id, scion.insc_pntr);
            } else {
                var insc_pntr = gen_Pntr(insc_i, insc_id);
            }
           
            switch (scion.insc_typ2) {
                case 'md_00':
                    var cite_ttl = gen_term(insc_id, scion.cite_ttl);
                    cite_prtr.append(insc_pntr, cite_ttl);
                    cite_prtr.style['align-items'] = 'center';

                    if (scion.cite_sbtt !== undefined) {
                        var cite_sbtt = gen_ECI('div', 'cite_sbtt', `id_cite_sbtt_${scion.scion_id}`);
                        cite_sbtt.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Subtitle]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_sbtt}</span>`;
                        cite_scns.append(cite_sbtt);
                    }
                    
                    if (scion.cite_site !== undefined) {
                        var cite_site = gen_ECI('div', 'cite_site', `id_cite_site_${scion.scion_id}`);
                        cite_site.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Web Site]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_site}</span>`;
                        cite_scns.append(cite_site);
                    }

                    if (scion.cite_auth !== undefined) {
                        for (x in scion.cite_auth) {
                            var cite_auth = gen_ECI('div', 'cite_auth', `id_cite_auth_${x}_${scion.scion_id}`);
                            cite_auth.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Author]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_auth[x].name}</span>`;
                            cite_scns.append(cite_auth);
                        }
                    }
                    
                    if (scion.cite_tstr !== undefined) {
                        for (x in scion.cite_tstr) {
                            var cite_tstr = gen_ECI('div', 'cite_tstr', `id_cite_tstr_${x}_${scion.scion_id}`);
                            cite_tstr.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Translator]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_tstr[x].name}</span>`;
                            cite_scns.append(cite_tstr);
                        }
                    }

                    if (scion.cite_edtr !== undefined) {
                        for (x in scion.cite_edtr) {
                            var cite_edtr = gen_ECI('div', 'cite_edtr', `id_cite_edtr_${x}_${scion.scion_id}`);
                            cite_edtr.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Editor]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_edtr[x].name}</span>`;
                            cite_scns.append(cite_edtr);
                        }
                    }

                    if (scion.cite_cmpl !== undefined) {
                        for (x in scion.cite_cmpl) {
                            var cite_cmpl = gen_ECI('div', 'cite_cmpl', `id_cite_cmpl_${x}_${scion.scion_id}`);
                            cite_cmpl.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Compiler]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_cmpl[x].name}</span>`;
                            cite_scns.append(cite_cmpl);
                        }
                    }

                    if (scion.cite_tchr !== undefined) {
                        for (x in scion.cite_tchr) {
                            var cite_tchr = gen_ECI('div', 'cite_tchr', `id_cite_tchr_${x}_${scion.scion_id}`);
                            cite_tchr.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Teacher]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_tchr[x].name}</span>`;
                            cite_scns.append(cite_tchr);
                        }
                    }

                    if (scion.cite_date !== undefined) {
                        var cite_date = gen_ECI('div', 'cite_date', `id_cite_date_${scion.scion_id}`);
                        cite_date.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Publication Date]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_date}</span>`;
                        cite_scns.append(cite_date);
                    }

                    if (scion.cite_edtn !== undefined) {
                        var cite_edtn = gen_ECI('div', 'cite_edtn', `id_cite_edtn_${scion.scion_id}`);
                        cite_edtn.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Edition]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_edtn}</span>`;
                        cite_scns.append(cite_edtn);
                    }

                    if (scion.cite_pbls !== undefined) {
                        var cite_pbls = gen_ECI('div', 'cite_pbls', `id_cite_pbls_${scion.scion_id}`);
                        cite_pbls.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Publisher]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_pbls}</span>`;
                        cite_scns.append(cite_pbls);
                    }

                    if (scion.cite_pltf !== undefined) {
                        var cite_pltf = gen_ECI('div', 'cite_pltf', `id_cite_pltf_${scion.scion_id}`);
                        cite_pltf.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Platform]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_pltf[x].name}</span>`;
                        cite_scns.append(cite_pltf);
                    }

                    if (scion.cite_isbn !== undefined) {
                        var cite_isbn = gen_ECI('div', 'cite_isbn', `id_cite_isbn_${scion.scion_id}`);
                        cite_isbn.innerHTML = `<span class='cite_flow'>|\\_>> <em>[ISBN]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_isbn}</span>`;
                        cite_scns.append(cite_isbn);
                    }

                    if (scion.cite_isbn13 !== undefined) {
                        var cite_isbn13 = gen_ECI('div', 'cite_isbn', `id_cite_isbn13_${scion.scion_id}`);
                        cite_isbn13.innerHTML = `<span class='cite_flow'>|\\_>> <em>[ISBN-13]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_isbn13}</span>`;
                        cite_scns.append(cite_isbn13);
                    }

                    if (scion.cite_isbn10 !== undefined) {
                        var cite_isbn10 = gen_ECI('div', 'cite_isbn', `id_cite_isbn10_${scion.scion_id}`);
                        cite_isbn10.innerHTML = `<span class='cite_flow'>|\\_>> <em>[ISBN-10]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_isbn10}</span>`;
                        cite_scns.append(cite_isbn10);
                    }

                    if (scion.cite_locc !== undefined) {
                        var cite_locc = gen_ECI('div', 'cite_locc', `id_cite_locc_${scion.scion_id}`);
                        cite_locc.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Library of Congress #]</em>::</span>&nbsp;<span class='cite_sbdt'>${scion.cite_locc}</span>`;
                        cite_scns.append(cite_locc);
                    }

                    if (scion.cite_link !== undefined) {
                        for (x in scion.cite_link) {
                            var cite_link = gen_ECI('div', 'cite_link', `id_cite_link_${x}_${scion.scion_id}`);
                            cite_link.innerHTML = `<span class='cite_flow'>|\\_>> <em>[Link]</em>::</span>&nbsp;<a href='${scion.cite_link[x].link}' target='_blank' class='cite_sbdt'>${scion.cite_link[x].link}</a>`;
                            cite_scns.append(cite_link);
                        }
                    }

                    break;    
                }   

            return cite_cntnr;

        case 'spcl':
            switch (scion.insc_typ2) {
                case 'drct_00':
                    var brnc_main = gen_ECI('div', 'branch_container', 'id_drct_00_brnc');
                    fetch(scion.insc_drct)
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            let drct_rcrd = data.scions
                            for (x in drct_rcrd) {
                                gen_dir(drct_rcrd[x]);
                            }
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    break;
            }
            return brnc_main;

        case 'tbls':
            var tbls_main = gen_ECI('table', 'tbl_cntnr', `id_tbls_${scion.scion_id}`);
            
            switch (scion.insc_typ2) {
                    case 'l777':
                        let thead = tbls_main.createTHead();
                        let row = thead.insertRow();
                        for (let key of scion.tbls_keys) {
                            let th = document.createElement("th");
                            let text = document.createTextNode(key.key);
                            th.appendChild(text);
                            row.appendChild(th);
                        }
                    break;
                }
        return tbls_main;
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
                var headBoard = createElementWithClass('div', 'headboard');
                var ls_ttl = createElementWithClass('div', 'hd_name');
                var hd_neck = createElementWithClass('div', 'hd_neck');
                var hd_nk_lf = createElementWithClass('div', 'hd_nk_lf');
                var hd_nk_rg = createElementWithClass('div', 'hd_nk_rg');
                //var hd_view = createElementWithClass('div', 'hd_view');
                //var hd_vw_a = createElementWithClass('div', 'hd_vw_a');
               // var hd_vw_a_0 = createElementWithClass('div', 'hd_vw_a_0');
               // var hd_vw_b = createElementWithClass('div', 'hd_vw_b');
              //  var hd_vw_b_1 = createElementWithClass('div', 'hd_vw_b_1');
              //  var hd_vw_b_2 = createElementWithClass('div', 'hd_vw_b_2');
             //   var hd_vw_b_2_a = createElementWithClass('div', 'hd_vw_b_2_a');
             //   var hd_vw_b_2_b = createElementWithClass('div', 'hd_vw_b_2_b');
            //    var hd_vw_c = createElementWithClass('div', 'hd_vw_c');
            //    var hd_vw_c_1 = createElementWithClass('div', 'hd_vw_c_1');
            //    var hd_vw_c_2 = createElementWithClass('div', 'hd_vw_c_2');
                var hd_lsid = createElementWithClass('div', 'styl_head_lsid');
                var directory_div = createElementWithClass('div', 'styl_head_drct');
                var directory_name = createElementWithClass('div', 'styl_drct_name');
                var directory_cntn = createElementWithClass('div', 'styl_drct_cntn');
                var headboard_tail = createElementWithClass('div', 'hd_tail');
                hd_lsid.innerHTML = `<br><span class='styl_pointers'>-></span> <b><u>LS-ID</u></b>: ${data.ls_id}<br><br>`;
        //        hd_vw_a_0.innerHTML = 'Views';
         //       hd_vw_b_1.innerHTML = 'Source:';
         //       hd_vw_b_2_a.innerHTML = 'JSON';
         //       hd_vw_b_2_b.innerHTML = 'DOCX';
        //        hd_vw_c_1.innerHTML = 'Version:';
        //        hd_vw_c_2.innerHTML = `<select id='vw_vrs' class='hd_vw_c_vb' onchange='getVers(this, '${data.scion_id}')'><option value='vw_vrs_live' selected>LIVE</option><option value='vw_vrs_000'>V   0.0.0</option></select>`;
        //        hd_vw_a.append(hd_vw_a_0);
     //           hd_vw_b_2.append(hd_vw_b_2_a, hd_vw_b_2_b);
    //            hd_vw_b.append(hd_vw_b_1, hd_vw_b_2);
       //         hd_vw_c.append(hd_vw_c_1, hd_vw_c_2);
          //      hd_view.append(hd_vw_a, hd_vw_b, hd_vw_c);
                ls_ttl.innerHTML = `<img src='Seal.jpg' width='333' height='333'></img><br><span class='hd_ttl_arrw'>->&nbsp;</span>&nbsp;<span class='hd_ttl'>(&nbsp;${data.ls_ttl}&nbsp;)</span>&nbsp;<span class='hd_ttl_arrw'>&nbsp;<-</span>`;
                
                headBoard.appendChild(ls_ttl);
                headBoard.appendChild(hd_neck);
                hd_neck.append(hd_nk_lf, hd_nk_rg);
                hd_nk_lf.append(hd_lsid, directory_div);
             //   hd_nk_rg.appendChild(hd_view);
                headboard_tail.innerHTML = "<br><br>" + bmp_brnch_tail;
                directory_name.innerHTML = `<span class='styl_pointers'>-></span> <b><u>Directory to ${data.ls_id}</b></u>:`;
                mainContainer.appendChild(headBoard);
                directory_div.appendChild(directory_name);
                directory_div.appendChild(directory_cntn);
                headBoard.appendChild(headboard_tail);
                for (i in data.scions) {
                    if (typeof data.scions[i].drct_id !== 'undefined') {
                        //deprecate once all pages are converted to drct_stub instead of the stupidly named drct_id
                        var drct_i = createElementWithClass('div', 'styl_drct_item');
                        var drct_i_pnt = gen_Pntr(data.scions[i].scion_id, i);
                        var drct_i_ttl = createElementWithClass('a', 'styl_drct_item_ttl');
                        drct_i_ttl.setAttribute('href', `#id_b_cntnr_${data.scions[i].scion_id}`);
                        drct_i_ttl.innerHTML = `${data.scions[i].drct_id} = ${data.scions[i].drct_ttl}`;
                        drct_i.appendChild(drct_i_pnt);
                        drct_i.appendChild(drct_i_ttl);
                        directory_cntn.appendChild(drct_i);
                    } else {
                        var drct_i = createElementWithClass('div', 'styl_drct_item');
                        var drct_i_pnt = gen_Pntr(data.scions[i].scion_id, i);
                        var drct_i_ttl = createElementWithClass('a', 'styl_drct_item_ttl');
                        drct_i_ttl.setAttribute('href', `#id_b_cntnr_${data.scions[i].scion_id}`);
                        drct_i_ttl.innerHTML = `<b>${data.scions[i].drct_stub[0]} = [${data.scions[i].drct_stub[1]}]</b>&nbsp;<i>of & for & around</i>&nbsp;(<b>${data.ls_ttl}</b>)`;
                        drct_i.appendChild(drct_i_pnt);
                        drct_i.appendChild(drct_i_ttl);
                        directory_cntn.appendChild(drct_i);
                    }
                }
            };
            gen_head(data);

            function pop_main(data) {
                var trst_cntnr = document.getElementById("trestleboard");
                if (data.scions !== undefined) {
                    var trst_boughs = data.scions;
                    for (i in trst_boughs) {
                        if (typeof trst_boughs[i].drct_id !== 'undefined'){
                            //deprecate once all pages are converted to drct_stub instead of the stupidly named drct_id
                            var bough_id = trst_boughs[i].scion_id;
                            var bough_name = trst_boughs[i].drct_id + " = " + trst_boughs[i].drct_ttl;
                            var bough_cntnr = gen_ECI('div', 'styl_brnch_cntnr', `id_b_cntnr_${bough_id}`);
                            var bough_bmp_top = gen_ECI('div', 'styl_brnch_bmp_top', `id_b_bmp_top_${bough_id}`);
                            var bough_nmtg = gen_ECI('div', 'styl_brnch_nmtg', `id_b_nmtg_${bough_id}`);
                            var bough_trstlbrd = gen_ECI('div', 'styl_brnch_trstlbrd', `id_b_trstlbrd_${bough_id}`);
                            var bough_bmp_btm = gen_ECI('div', 'styl_brnch_bmp_btm', `id_b_bmp_btm_${bough_id}`);
                            
                            bough_bmp_top.innerHTML = bmp_brnch_top;
                            bough_bmp_top.setAttribute('onclick', `shovelDigging('${bough_id}')`);
                            bough_bmp_btm.innerHTML = bmp_brnch_btm;
                            bough_bmp_btm.setAttribute('onclick', `shovelDigging('${bough_id}')`);
                            bough_nmtg.innerHTML = `<span class='styl_shvl_s0' id='id_b_p_${bough_id}'>-></span> <span class='styl_brnch_nmtg_name'>${bough_name}</span>:`;
                            bough_nmtg.setAttribute('onclick', `shovelDigging('${bough_id}')`);

                            bough_cntnr.append(bough_bmp_top, bough_nmtg, bough_trstlbrd, bough_bmp_btm);
                            trst_cntnr.appendChild(bough_cntnr);
                        } else {
                            var bough_id = trst_boughs[i].scion_id;
                            var bough_name = `${trst_boughs[i].drct_stub[0]} = [${trst_boughs[i].drct_stub[1]}] of & for & around (${data.ls_ttl})`;
                            var bough_cntnr = gen_ECI('div', 'styl_brnch_cntnr', `id_b_cntnr_${bough_id}`);
                            var bough_bmp_top = gen_ECI('div', 'styl_brnch_bmp_top', `id_b_bmp_top_${bough_id}`);
                            var bough_nmtg = gen_ECI('div', 'styl_brnch_nmtg', `id_b_nmtg_${bough_id}`);
                            var bough_trstlbrd = gen_ECI('div', 'styl_brnch_trstlbrd', `id_b_trstlbrd_${bough_id}`);
                            var bough_bmp_btm = gen_ECI('div', 'styl_brnch_bmp_btm', `id_b_bmp_btm_${bough_id}`);
                            
                            bough_bmp_top.innerHTML = bmp_brnch_top;
                            bough_bmp_top.setAttribute('onclick', `shovelDigging('${bough_id}')`);
                            bough_bmp_btm.innerHTML = bmp_brnch_btm;
                            bough_bmp_btm.setAttribute('onclick', `shovelDigging('${bough_id}')`);
                            bough_nmtg.innerHTML = `<span class='styl_shvl_s0' id='id_b_p_${bough_id}'>-></span> <span class='styl_brnch_nmtg_name'>${bough_name}</span>:`;
                            bough_nmtg.setAttribute('onclick', `shovelDigging('${bough_id}')`);

                            bough_cntnr.append(bough_bmp_top, bough_nmtg, bough_trstlbrd, bough_bmp_btm);
                            trst_cntnr.appendChild(bough_cntnr);
                        }

                        var stems = trst_boughs[i].scions;
                        for (i2 in stems) {
                            bough_trstlbrd.appendChild(gen_Insc(i2, stems[i2]));
                        }
                    }
                } else {
                    var bough_cntnr = gen_ECI('div', 'styl_brnch_cntnr', `id_b_cntnr_${bough_id}`);
                    bough_cntnr.innerHTML = "No content Yet!";
                    trst_cntnr.appendChild(bough_cntnr);
                }
            }
            pop_main(data);
        })
        .catch(err => {
            console.log(err);
        })
}

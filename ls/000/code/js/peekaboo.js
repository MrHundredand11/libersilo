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
            document.getElementById(`id_b_p_${scion_id}`).setAttribute('class', 'styl_shvl_s2');
            var testyy = document.getElementById(`id_b_trstlbrd_${scion_id}`);
            console.log(testyy);
            console.log(testyy.querySelectorAll(`:scope > *`));
            console.log(document.querySelectorAll(`id_b_trstlbrd_${scion_id} > *`));
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

function showHideStmExp(lf_id) {
    var twg_clss = document.getElementById(`${lf_id}_lf_stm_olst_exp`).className;
    if (twg_clss.includes('stt_show')) {
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_top`).style.display = "none";
        document.getElementById(`${lf_id}_lf_stm_olst_exp_bmp_btm`).style.display = "none";
        document.getElementById(`${lf_id}_lf_stm_olst_exp_cntn`).style.display = "none";
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

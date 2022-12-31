function gen_dir(rcr) {
    switch (rcr.ls_type) {
        case '->':
            var d_i = gen_ECI('div', 'styl_drct_rcrd_brnch', `${rcr.scion_id}`);
            d_i.appendChild(gen_PntrDrct(rcr.scion_id, rcr.ls_type));
            var d_ic = createElementWithClass('div', 'styl_drct_rcrd_brnch_name');
            d_ic.setAttribute('onclick', `fillErUp(${rcr.ls_url})`);
            d_ic.innerHTML = `<em>[${rcr.ls_id}]</em> = <span class='styl_drct_rcrd_head'>${rcr.ls_ttl}</span>`;
            d_i.appendChild(d_ic);
            //var drct_cntnr = document.getElementById('id_drct_cntn');
            document.getElementById('id_drct_cntn').appendChild(d_i);
            var fl_cntnr = createElementWithClass('div', 'styl_drct_fl_cntnr');
            d_i.appendChild(fl_cntnr);
            for (x in rcr.scions) {
                var fff = gen_dir(rcr.scions[x]);
                fl_cntnr.appendChild(fff);
            }
            return d_i;
                            
        case '=>':
            var d_i = createElementWithClass('div', 'styl_drct_rcrd_fldr');
            d_i.appendChild(gen_PntrDrct(rcr.scion_id, rcr.ls_type));
            var d_ic = createElementWithClass('div', 'styl_drct_rcrd_brnch_name');
            d_ic.innerHTML = `<em>[${rcr.ls_id}]</em> = <span class='styl_drct_rcrd_i'>${rcr.ls_ttl}</span>`;
            d_i.appendChild(d_ic);
            var fl_cntnr2 = createElementWithClass('div', 'styl_drct_fl_cntnr');
            d_i.appendChild(fl_cntnr2);
            for (x in rcr.scions) {
                var fff = gen_dir(rcr.scions[x]);
                fl_cntnr2.appendChild(fff);
            }
            return d_i;

        case '+>':    
            var d_i = createElementWithClass('div', 'styl_drct_rcrd_item');
            d_i.appendChild(gen_PntrDrct(rcr.scion_id, rcr.ls_type));
            var d_ic = createElementWithClass('div', 'styl_drct_rcrd_brnch_name');
            d_ic.innerHTML = "<em>[" +  rcr.ls_id + "]</em> = <span class='styl_drct_rcrd_i'>" + rcr.ls_ttl + "</span>";
            d_i.appendChild(d_ic);
            return d_i;
    }
                // d_i2.setAttribute('id', drct_rcrd[d].scions[d2].scion_id);
                // d_i2c.setAttribute('onclick', `fillErUp(${drct_rcrd[d].scions[d2].ls_url})`);
};

function gen_PntrDrct(scion_id, p_type) {
    var pntr = gen_ECI('div', 'styl_pointers styl_pnt_0deg', `id_pnt_${scion_id}`);
    pntr.setAttribute('onclick', `rotatePointer('id_pnt_${scion_id}')`);
    switch (p_type) {
        case '->':
            pntr.innerHTML = "->&nbsp";
            break;

        case '=>':
            pntr.innerHTML = "=>&nbsp";
            break;

        case '+>':
            pntr.innerHTML = "+>&nbsp";
            break;
    }
    return pntr;
};

function homeFetch() {
    var drct_full = 'https://api.jsonbin.io/v3/b/63a87ea8dfc68e59d570c185';
    fetch(drct_full)
        .then(response => {
            return response.json();
        })
        .then(data => {
            var mainContainer = document.getElementById("trestleboard");
            mainContainer.innerHTML = "";
            function populatePage(data) {
                var headBoard = createElementWithClass('div', 'branch_container');
                var ls_ttl = createElementWithClass('div', 'styl_head_ttle');
                ls_ttl.innerHTML = "<img src='Seal.jpg' width='333' height='333'></img><br>" + "-> " + data.record.ls_ttl + " <-";
                headBoard.appendChild(ls_ttl);
                mainContainer.appendChild(headBoard);
            }
            populatePage(data)

            function popDir(data) {
                let drct_rcrd = data.record.scions
                var drct_main = createElementWithClass('div', 'branch_container');
                var drct_head = createElementWithClass('div', 'styl_drct_head');
                var drct_cntn = gen_ECI('div', 'styl_drct_cntn', 'id_drct_cntn');
                drct_head.innerHTML = "<span class='styl_pointers'>-></span> <strong><u>Full Directory to Liber Silo</u></strong>:";
                drct_main.append(drct_head, drct_cntn);
                mainContainer.appendChild(drct_main);
                for (x in drct_rcrd) {
                    gen_dir(drct_rcrd[x]);
                }
            }
            popDir(data);
        })

        .catch(err => {
            console.log(err);
        })
}

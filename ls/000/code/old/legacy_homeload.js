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

            // function popDir(data) {
            //     var drct_rcrd = data.record.scions
            //     var drct_main = createElementWithClass('div', 'branch_container');
            //     var drct_head = createElementWithClass('div', 'styl_drct_head');
            //     var drct_cntn = createElementWithClass('div', 'styl_drct_cntn');
            //     drct_head.innerHTML = "<span class='styl_pointers'>-></span> <strong><u>Full Directory to Liber Silo</u></strong>:";
            //     drct_main.appendChild(drct_head);
            //     drct_main.appendChild(drct_cntn);
            //     mainContainer.appendChild(drct_main);
            //     for (d in drct_rcrd) {
            //         console.log(drct_rcrd[d].ls_id);
            //         var d_i = createElementWithClass('div', 'styl_drct_rcrd_brnch');
            //         d_i.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].ls_type + "</span> <em>[" + drct_rcrd[d].ls_id + "]</em> = <span class='styl_drct_rcrd_head'>" + drct_rcrd[d].ls_ttl + "</span>";
            //         drct_cntn.appendChild(d_i);

            //         if (drct_rcrd[d].scions !== null) {
            //             for (d2 in drct_rcrd[d].scions) {
            //                 if (drct_rcrd[d].scions[d2].ls_type == "=>") {
            //                     var d_i2 = createElementWithClass('div', 'styl_drct_rcrd_fldr');
            //                     d_i2.innerHTML = "<span class='styl_pointers'>" +  drct_rcrd[d].scions[d2].ls_type + "</span> <em>[" +  drct_rcrd[d].scions[d2].ls_id + "]</em> = <span class='styl_drct_rcrd_i'>" +  drct_rcrd[d].scions[d2].ls_ttl + "</span>";
            //                     d_i.appendChild(d_i2);
            //                 } else if (drct_rcrd[d].scions[d2].ls_type == "+>") {
            //                     var d_i2 = createElementWithClass('div', 'styl_drct_rcrd_item');
            //                     d_i2.innerHTML = "<span class='styl_pointers'>" +  drct_rcrd[d].scions[d2].ls_type + "</span> <em>[" +  drct_rcrd[d].scions[d2].ls_id + "]</em> = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].ls_ttl + "</span>";
            //                     d_i.appendChild(d_i2);
            //                 }

            //                 if (drct_rcrd[d].scions[d2].scions !== null) {
            //                     for (d3 in drct_rcrd[d].scions[d2].scions) {
            //                         if (drct_rcrd[d].scions[d2].scions[d3].ls_type == "=>") {
            //                             var d_i3 = createElementWithClass('div', 'styl_drct_rcrd_fldr');
            //                             d_i3.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].ls_ttl + "</span>";
            //                             d_i2.appendChild(d_i3);
            //                         } else if (drct_rcrd[d].scions[d2].scions[d3].ls_type == "+>") {
            //                             var d_i3 = createElementWithClass('div', 'styl_drct_rcrd_item');
            //                             d_i3.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].ls_ttl + "</span>";
            //                             console.log(d_i3);
            //                             d_i2.appendChild(d_i3);
            //                         }

            //                         if (drct_rcrd[d].scions[d2].scions[d3].scions !== null) {
            //                             for (d4 in drct_rcrd[d].scions[d2].scions[d3].scions) {
            //                                 if (drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type == "=>") {
            //                                     var d_i4 = createElementWithClass('div', 'styl_drct_rcrd_fldr');
            //                                     d_i4.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_ttl + "</span>";
            //                                     d_i3.appendChild(d_i4);
            //                                 } else if (drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type == "+>") {
            //                                     var d_i4 = createElementWithClass('div', 'styl_drct_rcrd_item');
            //                                     d_i4.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_ttl + "</span>";
            //                                     d_i3.appendChild(d_i4);
            //                                 }
            //                             }
            //                         }
            //                     }
            //                 }
            //             }
            //         }

            //     }
            // }
            // popDir(data);

            function popDir(data) {
                var drct_rcrd = data.record.scions
                var drct_main = createElementWithClass('div', 'branch_container');
                var drct_head = createElementWithClass('div', 'styl_drct_head');
                var drct_cntn = createElementWithClass('div', 'styl_drct_cntn');
                drct_head.innerHTML = "<span class='styl_pointers'>-></span> <strong><u>Full Directory to Liber Silo</u></strong>:";
                drct_main.appendChild(drct_head);
                drct_main.appendChild(drct_cntn);
                mainContainer.appendChild(drct_main);
                for (d in drct_rcrd) {
                    console.log(drct_rcrd[d].ls_id);
                    var d_i = createElementWithClass('div', 'styl_drct_rcrd_brnch');
                    d_i.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].ls_type + "</span> <em>[" + drct_rcrd[d].ls_id + "]</em> = <span class='styl_drct_rcrd_head'>" + drct_rcrd[d].ls_ttl + "</span>";
                    drct_cntn.appendChild(d_i);

                    if (drct_rcrd[d].scions !== null) {
                        for (d2 in drct_rcrd[d].scions) {
                            if (drct_rcrd[d].scions[d2].ls_type == "=>") {
                                var d_i2 = createElementWithClass('div', 'styl_drct_rcrd_fldr');
                                d_i2.innerHTML = "<span class='styl_pointers'>" +  drct_rcrd[d].scions[d2].ls_type + "</span> <em>[" +  drct_rcrd[d].scions[d2].ls_id + "]</em> = <span class='styl_drct_rcrd_i'>" +  drct_rcrd[d].scions[d2].ls_ttl + "</span>";
                                d_i.appendChild(d_i2);
                            } else if (drct_rcrd[d].scions[d2].ls_type == "+>") {
                                var d_i2 = createElementWithClass('div', 'styl_drct_rcrd_item');
                                d_i2.innerHTML = "<span class='styl_pointers'>" +  drct_rcrd[d].scions[d2].ls_type + "</span> <em>[" +  drct_rcrd[d].scions[d2].ls_id + "]</em> = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].ls_ttl + "</span>";
                                d_i.appendChild(d_i2);
                            }

                            if (drct_rcrd[d].scions[d2].scions !== null) {
                                for (d3 in drct_rcrd[d].scions[d2].scions) {
                                    if (drct_rcrd[d].scions[d2].scions[d3].ls_type == "=>") {
                                        var d_i3 = createElementWithClass('div', 'styl_drct_rcrd_fldr');
                                        d_i3.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].ls_ttl + "</span>";
                                        d_i2.appendChild(d_i3);
                                    } else if (drct_rcrd[d].scions[d2].scions[d3].ls_type == "+>") {
                                        var d_i3 = createElementWithClass('div', 'styl_drct_rcrd_item');
                                        d_i3.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].ls_ttl + "</span>";
                                        d_i2.appendChild(d_i3);
                                    }

                                    if (drct_rcrd[d].scions[d2].scions[d3].scions !== null) {
                                        for (d4 in drct_rcrd[d].scions[d2].scions[d3].scions) {
                                            if (drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type == "=>") {
                                                var d_i4 = createElementWithClass('div', 'styl_drct_rcrd_fldr');
                                                d_i4.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_ttl + "</span>";
                                                d_i3.appendChild(d_i4);
                                            } else if (drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type == "+>") {
                                                var d_i4 = createElementWithClass('div', 'styl_drct_rcrd_item');
                                                d_i4.innerHTML = "<span class='styl_pointers'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_type + "</span> [" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_id + "] = <span class='styl_drct_rcrd_i'>" + drct_rcrd[d].scions[d2].scions[d3].scions[d4].ls_ttl + "</span>";
                                                d_i3.appendChild(d_i4);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }
            }
            popDir(data);
        })

        .catch(err => {
            console.log(err);
        })
}

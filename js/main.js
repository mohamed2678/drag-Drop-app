let btn = document.getElementById("btn");
        let inp = document.getElementById("inp");
        let boxs = document.querySelectorAll(".box");
        let drag = null;

        document.addEventListener("DOMContentLoaded", loadBoxes);

        btn.onclick = function() {
            if (inp.value != "") {
                boxs[0].innerHTML += `
                <p class="item" draggable="true">${inp.value}<span onclick="clearItem()" class="delete">x</span></p>
                `;
                inp.value = "";
                dragItem();
                saveBoxes();
            }
        };
        function clearItem(){
            let item = event.target.parentNode;
            item.parentNode.removeChild(item);
            saveBoxes();
        }

        function dragItem() {
            let items = document.querySelectorAll(".item");
            items.forEach(item => {
                item.addEventListener("dragstart", function() {
                    drag = item;
                    item.style.opacity = '0.5';
                });
                item.addEventListener("dragend", function() {
                    drag = null;
                    item.style.opacity = '1';
                    saveBoxes();
                });
                boxs.forEach(box => {
                    box.addEventListener("dragover", function(e) {
                        e.preventDefault();
                        this.style.background = "#090";
                        this.style.color = "#fff";
                    });
                    box.addEventListener("dragleave", function() {
                        this.style.background = "#fff";
                        this.style.color = "#000";
                    });
                    box.addEventListener("drop", function() {
                        this.append(drag);
                        this.style.background = "#fff";
                        this.style.color = "#000";
                        saveBoxes();
                    });
                });
            });
        }
// save the boxs in local storage
        function saveBoxes() {
            let boxData = [];
            boxs.forEach(box => {
                boxData.push(box.innerHTML);
            });
            localStorage.setItem('boxData', JSON.stringify(boxData));
        }

        function loadBoxes() {
            let boxData = JSON.parse(localStorage.getItem('boxData'));
            if (boxData) {
                boxs.forEach((box, index) => {
                    box.innerHTML = boxData[index];
                });
                dragItem();
            }
        }

        dragItem();
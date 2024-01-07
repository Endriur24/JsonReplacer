class JsonReplacer {
    constructor(jsonUrl, targetId) {
        this.jsonUrl = jsonUrl;
        this.targetId = targetId;
    }




    replace() {
        fetch(this.jsonUrl)
            .then(response => response.json())
            .then(data => {


                const outerElementId = this.targetId;
                document.getElementById(outerElementId).innerHTML = cycleThrough(data, outerElementId);

            })
            .catch(error => console.error(error));




        function cycleThrough(data, outerElementId) {

            const targetElement = document.getElementById(outerElementId);
            let targetContent = targetElement.innerHTML;


            Object.keys(data).forEach(key => {


                if (Array.isArray(data[key])) {

                    //CREATE VURTUAL DOM ELEMENT
                    var virtual_element = document.createElement( 'html' );
                    virtual_element.innerHTML = targetContent;
                    //-------------------
                    let newContent = '';
                    for (let element of data[key]) {
                        newContent += cycleThrough(element, key)
                    }
                    virtual_element.querySelector(`#${key}`).innerHTML = newContent;
                    targetContent = virtual_element.innerHTML;
                    

                };

                const pattern = new RegExp(`{{${key}}}`, 'g');
                targetContent = targetContent.replace(pattern, data[key]);



            });
            return targetContent;
        }
    }







    replaceOLD() {                                                    //old function - non recursive
        fetch(this.jsonUrl)
            .then(response => response.json())
            .then(data => {

                Object.keys(data).forEach(key => {
                    const pattern = new RegExp(`{{${key}}}`, 'g');

                    if (Array.isArray(data[key])) {
                        const templateElement = document.getElementById(key);
                        const template = templateElement.innerHTML;
                        let newContent = '';
                        data[key].forEach(item => {
                            let itemContent = template;
                            Object.keys(item).forEach(subKey => {
                                const subPattern = new RegExp(`{{${subKey}}}`, 'g');
                                itemContent = itemContent.replace(subPattern, item[subKey]);
                            });
                            newContent += itemContent;
                        });
                        document.getElementById(key).innerHTML = newContent;
                    } else {
                        const targetElement = document.getElementById(this.targetId);
                        let targetContent = targetElement.innerHTML;
                        targetContent = targetContent.replace(pattern, data[key]);
                        targetElement.innerHTML = targetContent;
                    }

                });

            })
            .catch(error => console.error(error));
    }

}
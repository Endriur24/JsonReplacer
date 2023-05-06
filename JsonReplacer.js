class JsonReplacer {
    constructor(jsonUrl, targetId) {
        this.jsonUrl = jsonUrl;
        this.targetId = targetId;
    }

    replace() {
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

let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.currentTarget.innerHTML;

        if (value === '=') {
            try {
                string = String(eval(string));
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        }

        else if (value === 'AC') {
            string = "";
            input.value = string;
        }

        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }

        else {
              if (value === '×') {
        string += '*';
    }
    else if (value === '÷') {
        string += '/';
    }
    else {
        string += value;
    }

    input.value = string
        .replace(/\*/g, '×')
        .replace(/\//g, '÷');
        }
    });
});

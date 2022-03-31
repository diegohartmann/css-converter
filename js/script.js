window.addEventListener('load',()=>{

    let cssToJSS = true;


    // const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    const jssToCss = _string =>{
        let rules=[];
        let values=[];

        const splitedRulesArray = (_string.trim()).split('\n').join('').split(',');
        splitedRulesArray.forEach(_cssRule=>{
            const singleRuleArray = _cssRule.trim().split(':');
            rules.push(singleRuleArray[0].trim());
            values.push(singleRuleArray[1].trim());
        })

        const formatedRules = rules.map(_rule=>{
            // let finalRule = '';
            // return letters.forEach(_letter=>{
            //     if(_rule.includes(_letter.toUpperCase())){
            //         return _rule.split(_letter.toUpperCase()).join(`-${_letter}`).trim();
            //     }
            // })
            return _rule.split('A').join('-a')
            .split('B').join('-b')
            .split('C').join('-c')
            .split('D').join('-d')
            .split('E').join('-e')
            .split('F').join('-f')
            .split('G').join('-g')
            .split('H').join('-h')
            .split('I').join('-i')
            .split('J').join('-j')
            .split('K').join('-k')
            .split('L').join('-l')
            .split('M').join('-m')
            .split('N').join('-n')
            .split('O').join('-o')
            .split('P').join('-p')
            .split('Q').join('-q')
            .split('R').join('-r')
            .split('S').join('-s')
            .split('T').join('-t')
            .split('U').join('-u')
            .split('V').join('-v')
            .split('W').join('-w')
            .split('X').join('-x')
            .split('Y').join('-y')
            .split('Z').join('-z')
            .split('\n').join('')
            .trim()
        })

        const formatedValues = values.map(_value=>{
            return `"${_value}";/n`
        })


        let masked = '';
        for (let index = 0; index < formatedRules.length; index++) {
            masked += (`${formatedRules[index]}: ${formatedValues[index]}`)
        }
        return masked;

    }


    const cssTojss = (_string)=>{
        let rules=[];
        let values=[]; 

        const splitedRulesArray = (_string.trim()).split('\n').join('').split(';');
        splitedRulesArray.forEach(_cssRule=>{
            const singleRuleArray = _cssRule.trim().split(':');
            rules.push(singleRuleArray[0].trim());
            values.push(singleRuleArray[1].trim());
        })

            
        const formatedRules = rules.map(_rule=>{
            // return letters.map(_letter=>{
            //     if(_rule.includes(`-${_letter}`)){
            //         return _rule.split(`-${_letter}`).join(_letter.toUpperCase()).trim();
            //     }
            // })
            return _rule.split('-a').join('A')
            .split('-b').join('B')
            .split('-c').join('C')
            .split('-d').join('D')
            .split('-e').join('E')
            .split('-f').join('F')
            .split('-h').join('H')
            .split('-i').join('I')
            .split('-j').join('J')
            .split('-k').join('K')
            .split('-l').join('L')
            .split('-m').join('M')
            .split('-n').join('N')
            .split('-o').join('O')
            .split('-p').join('P')
            .split('-q').join('Q')
            .split('-r').join('R')
            .split('-s').join('S')
            .split('-t').join('T')
            .split('-u').join('U')
            .split('-v').join('V')
            .split('-w').join('W')
            .split('-x').join('X')
            .split('-y').join('Y')
            .split('-z').join('Z')
            .split('\n').join('')
            .trim()
        })

        const formatedValues = values.map(_value=>{
            return `"${_value}",
            `
        })


        let masked = '';
        for (let index = 0; index < formatedRules.length; index++) {
            masked += (`${formatedRules[index]}: ${formatedValues[index]}`)
        }
        return masked;
        
    }

    //toggle theme
    document.querySelector('#themeToggle').addEventListener('click',()=>{
        document.documentElement.classList.toggle('dark');
    })

    //clickToConvert
    document.querySelector('body > main > button').addEventListener('click',(e)=>{
        e.preventDefault();
        e.stopPropagation();

        const inputContent = document.querySelector('#input').value.trim();
        const lastCharIndex = inputContent.length-1;
        const lastChar = inputContent[lastCharIndex];
        const contentWithoutLastChar = inputContent.substring(0, lastCharIndex)
        const writtenValue = (lastChar === ';' || lastChar === ',') ?  contentWithoutLastChar : inputContent ;
        document.querySelector('#output').value = cssToJSS ? cssTojss(writtenValue) : jssToCss(writtenValue); 

    })

})
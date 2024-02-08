const SayHello = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/controller/SayHell/${input}`);
    const data = await promise.text();
    return data;
}

const Add2Numbers = async (input1, input2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Add2Numbers/Adding2Num/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

const AskingQuestions = async (input1, input2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Ask2Questions/Ask2Questions/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

const GreaterOrLess = async (input1, input2) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/LessOrGreater/LessOrGreater/${input1}/${input2}`);
    const data = await promise.text();
    return data;
}

const MadLib = async (input1, input2, input3, input4, input5, input6, input7, input8, input9, input10) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/MadLib/MadLib/${input1}/${input2}/${input3}/${input4}/${input5}/${input6}/${input7}/${input8}/${input9}/${input10}`);
    const data = await promise.text();
    return data;
}

const OddOrEven = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/OddOrEven/OddOrEven/${input}`);
    const data = await promise.text();
    return data;
}

const ReverseItWords = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItAlphanumeric/ReverseItAlphanumeric/${input}`);
    const data = await promise.text();
    return data;
}

const ReverseItNumbers = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/ReverseItNumbersOnly/ReverseItNumbersOnly/${input}`);
    const data = await promise.text();
    return data;
}

const RestaurantPicker = async (input) => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/RestaurantPicker/RestaurantPicker 1.Japanese 2.Korean 3.Chinese/${input}`);
    const data = await promise.text();
    return data;
}

const Magic8Ball = async () => {
    const promise = await fetch(`https://allforonehosting.azurewebsites.net/Magic8Ball/Magic8Ball`);
    const data = await promise.text();
    return data;
}

export {SayHello, Add2Numbers, AskingQuestions, GreaterOrLess, MadLib, OddOrEven, ReverseItWords, ReverseItNumbers, RestaurantPicker, Magic8Ball}
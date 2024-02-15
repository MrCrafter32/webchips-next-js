export function push(data: any){
    const formDatab = new FormData(data);
    fetch(
      "https://script.google.com/macros/s/AKfycbxczp9icHajvT50UbAFuZh5kcVisAkSCve-szcNlD8efpsRz1GinlWuzX5-5p6JB_Dn/exec",
      {
        mode: 'no-cors',
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
}
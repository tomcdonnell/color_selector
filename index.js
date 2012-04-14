/**************************************************************************************************\
*
* vim: ts=3 sw=3 et wrap co=100 go-=b
*
* Filename: "index.js"
*
* Project: Programming Tools - Color Selector.
*
* Purpose: Start the JavaScripts.
*
* Author: Tom McDonnell 2009-04-18.
*
\**************************************************************************************************/

window.addEventListener('load', onLoadWindow, false);

// Functions. //////////////////////////////////////////////////////////////////////////////////////

function onLoadWindow(e)
{
   try
   {
      var f = 'onLoadWindow()';
      UTILS.checkArgs(f, arguments, [Event]);
      DomBuilder.apply(window);

      var selectorColor = new SelectorColor(405, 135);
      var body          = document.body;

      body.appendChild
      (
         A
         (
            {style: 'font-size: small', href: 'http://www.tomcdonnell.net'},
            'Back to tomcdonnell.net'
         )
      );
      body.appendChild(H1({style: 'margin: 0'}, 'Color Selector'));
      body.appendChild(selectorColor.getDiv());
   }
   catch (e)
   {
      UTILS.printExceptionToConsole(f, e);
   }
}

/*******************************************END*OF*FILE********************************************/

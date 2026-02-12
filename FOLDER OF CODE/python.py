from pyscript import when
        from pyscript.web import dom
  @when("click", "#calculate-btn")
        def solve(event):
            
            screen = dom["#display"][0]
            
            
            expression = screen.value
            
            try:

                result = eval(expression)
                
                
                screen.value = str(result)
            except Exception as e:
                screen.value = "Error"

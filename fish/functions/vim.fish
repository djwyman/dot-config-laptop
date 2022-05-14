function vim --wraps=micro --wraps='sudo micro' --description 'alias vim sudo micro'
  sudo micro $argv; 
end

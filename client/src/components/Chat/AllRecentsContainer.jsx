import React from 'react'
import Recent from './Recent'

export function AllRecentsContainer({ search, setNomeChat, nomeChat }) {

    const recents = [{
        'nome' : 'Marcelo',
        'mensagem' : 'Bom dia',
        'hora' : '09:52',
    },
    {
        'nome' : 'Diego',
        'mensagem' : 'Boa tarde',
        'hora' : '14:30'
    },
    {
        'nome' : 'Samuel',
        'mensagem' : 'Boa noite',
        'hora' : '20:22'
    },
    {
        'nome' : 'Renan',
        'mensagem' : 'Lmao',
        'hora' : '00:52'
    },
    {
        'nome' : 'Yuri',
        'mensagem' : 'Lranja',
        'hora' : '00:53'
    },
    {
        'nome' : 'Victor',
        'mensagem' : 'Falando nisso...',
        'hora' : '17:01'
    },
    {
        'nome' : 'Vinicius',
        'mensagem' : 'Olá',
        'hora' : '00:00'
    }
]

  return (
    <div className="recentConv show">
        {recents
        .filter((contact) => contact.nome.toLowerCase().includes(search.toLowerCase()))
        .map((contact) => (
            <Recent contact={contact} setNomeChat={setNomeChat} nomeChat={nomeChat} />
        ))}
    </div>
  )
}
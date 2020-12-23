import { useState, FormEvent } from 'react';
import { Flex, Image, Button, Text } from '@chakra-ui/core'
import Input from '../components/Input'
import axios from 'axios';

export default function Home() {
  const [email, setEmail] = useState('');

  function handleSignUpToNewsletter(event: FormEvent) {
    /*
    event.preventDefault();

    axios.post('/api/subscribe', { email });
    */
   //window.confirm(email.toUpperCase()[0]);
    if(email.length == 0)
    {
      window.alert("Insira seu primeiro nome");
      return;
    }
   var date = new Date();
   var dia = date.getDay();
   var seconds = date.getSeconds() + (date.getMinutes()*60) + (date.getHours()*60*60);

   var id = email.toUpperCase()[0] + dia + seconds;

   window.alert(`Seu ID é ${id}`);
  }

  return (
    <Flex
      as="main"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        as="form"
        onSubmit={handleSignUpToNewsletter}
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={8}
        marginTop={4}
        width="100%" 
        maxW="400px"
      >
        <Image marginBottom={8} src="/creatus.svg" alt="Rocketseat" />

        <Text textAlign="center" fontSize="sm" color="gray.400" marginBottom={2}>
          Finalize seu cadastro e faça parte dessa turma !
        </Text>

        <Input
          placeholder="Seu primeiro nome"
          marginTop={2}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Button
          type="submit"
          backgroundColor="blue.500"
          height="50px"
          borderRadius="sm"
          marginTop={6}
          //_hover={{ backgroundColor: 'purple.600' }}
          _hover={{ backgroundColor: 'blue.600' }}
        >
          GERAR
        </Button>
      </Flex>
    </Flex>
  )
}

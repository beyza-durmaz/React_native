import React, { useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import Input from '../components/Input';
import Button from '../components/Button';
import MemberResult from "./memberResult";

function MemberSign({navigation}) {

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);
    const [userHometown, setUserHometown] = useState(null);

    function handleSubmit() {

        if(!userName || !userSurname || !userAge || !userMail || !userHometown) {
            Alert.alert('Kebap Fitness Salonu', 'Bilgiler boş bırakılamaz!')
            return;
        }

        const user = {
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,
        }
        navigation.navigate('MemberResultScreen', {user});
    }


    return(
        <SafeAreaView>
            <Input label='Üye Adı' placeholder='Üyenin ismini giriniz...' onChangeText={setUserName} />
            <Input label='Üye Soyad' placeholder='Üyenin soyismini giriniz...' onChangeText={setUserSurname} />
            <Input label='Üye Yaş' placeholder='Üyenin yaşını giriniz...' onChangeText={setUserAge} />
            <Input label='Üye E-mail' placeholder='Üyenin e-mail adresini giriniz...' onChangeText={setUserMail} />
            <Input label='Üye Memleket' placeholder='Üyenin memleketini giriniz...' onChangeText={setUserHometown} />
            <Button text='Kaydı Tamamla' onPress={handleSubmit}/>
        </SafeAreaView>
    )
}

export default MemberSign;
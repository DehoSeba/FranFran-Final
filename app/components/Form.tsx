import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

type FormData = {
    email: string;
    question: string;
};

export default function Form() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            email: '',
            question: '',
        },
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Me contacter :
            </Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.mail}
                        placeholder="Ton mail"
                        placeholderTextColor="gray" // Specify placeholder text color
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="email"
            />
            {errors.email && <Text style={styles.errorText}>This is required.</Text>}

            <Controller
                control={control}
                rules={{
                    maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.question}
                        placeholder="Ta question"
                        placeholderTextColor="gray" // Specify placeholder text color
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name="question"
            />

            <View style={styles.buttonContainer}>
                <Button  title="Envoyer" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left : '10%',
        width : '80%',
        top: 200,

    },
    mail: {
        marginBottom: 10,
        padding: 5,
        width: '100%',
        backgroundColor: '#ebebeb',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: 'bold',

    },
    question : {
        marginBottom: 10,
        padding: 5,
        width: '100%',
        backgroundColor: '#ebebeb',
        textAlign: 'center',
        height : '80%',
        fontWeight: 'bold',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    buttonContainer: {
        width: '80%',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 3,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        padding: 5,
    },
    text: {
        flex: 1,
        position: 'absolute',
        top: -80,
        left: '30%',
        fontSize: 18,
    },
});

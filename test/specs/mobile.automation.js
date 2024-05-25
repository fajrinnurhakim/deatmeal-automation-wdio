describe('Open application', () => {
  it('Success opening to Home Screen', async () => {
    driver.setImplicitTimeout(6000);
    const selector =
      'new UiSelector().text("Welcome...").className("android.widget.TextView")';
    await expect(await $(`android=${selector}`)).toHaveTextContaining(
      'Welcome'
    );
    await $('id:com.fghilmany.dietmealapp:id/et_name').setValue(
      'Fajrin Nurhakim'
    );
    await $('id:com.fghilmany.dietmealapp:id/et_weight').setValue(47);
    await $('id:com.fghilmany.dietmealapp:id/et_height').setValue(164);
    await $('id:com.fghilmany.dietmealapp:id/rb_male').click();
    await $(
      'xpath://android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]'
    ).click();
    await $('id:com.fghilmany.dietmealapp:id/rb_low_to_medium').click();
    await $('id:com.fghilmany.dietmealapp:id/bt_finish').click();
  });
});
